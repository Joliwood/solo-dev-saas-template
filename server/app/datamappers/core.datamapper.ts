import { type BatchedSQLDataSource, type BatchedLoader } from '@nic-jennings/sql-datasource';

import { type TableNamesEnum } from '#enums';
import {
  type AllCreate,
  type AllFindAll,
  type AllFindById,
  type AllUpdate,
  type CoreDatamapperOptions,
} from '#types';

class CoreDatamapper {
  idsLoader: BatchedLoader<Record<string, any>, Record<string, any>> | null = null;

  constructor(
    public readonly client: BatchedSQLDataSource['db'],
    public tableName: TableNamesEnum,
  ) {
    this.client = client;
    this.tableName = tableName;
  }

  // Normaly this method should be called in the constructor but this.tableName is not defined yet
  // So we will make this method disponible and let the datasource call it after each constructor
  init() {
    // This idsLoader allows to order all results by id, for every query request
    this.idsLoader = this.client.query
      .from(this.tableName)
      // TODO : Define types
      .batch(async (query, ids) => {
        const rows = await query.whereIn('id', ids);
        // TODO : Define types
        return ids.map((id) => rows.find((row: any) => row.id === id));
      });
  }

  async findById(id: number): Promise<AllFindById> {
    const row = await this.client.query.from(this.tableName).where({ id }).first();
    return row;
  }

  async findAll(option: CoreDatamapperOptions = {}): Promise<AllFindAll> {
    const query = this.client.query.from(this.tableName);
    const { email, limit } = option;

    if (email) {
      query.where({ email });
    }

    if (limit) {
      query.limit(limit);
    }

    const rowsFiltered = await query;
    return rowsFiltered;
  }

  async create(inputData: Record<string, any>): Promise<AllCreate> {
    const [row] = await this.client.query.from(this.tableName).insert(inputData).returning('*');
    return row;
  }

  async update(id: number, inputData: Record<string, any>): Promise<AllUpdate> {
    const [row] = await this.client.query.from(this.tableName).update(inputData).where({ id }).returning('*');
    return row;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.client.query.from(this.tableName).where({ id }).del();
    if (result) {
      return true;
    }
    return false;
  }
}

export default CoreDatamapper;
