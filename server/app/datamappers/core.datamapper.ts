import { type BatchedLoader, type BatchedSQLDataSource } from '@nic-jennings/sql-datasource';

import { checkIfDeleted, getFilterQuery } from '#serverUtils';
import { type AllUpdateInputs, type AllCreateInputs, type AllFindAllArgs } from '#serverTypes';
import { type TableNamesEnum } from '#serverEnums';

class CoreDatamapper {
  idsLoader!: BatchedLoader;

  constructor(
    public readonly client: BatchedSQLDataSource['db'],
    public tableName: TableNamesEnum,
  ) {
    this.client = client;
    this.tableName = tableName;
  }

  /** This idsLoader allows to order all results by id, for every query request */
  init() {
    this.idsLoader = this.client.query
      .from(this.tableName)
      .batch(async (query, ids) => {
        const results = await query.whereIn('id', ids);
        return ids.map((id) => results.find((result: any) => result.id === id));
      });
  }

  async findOne<KQueryResult>(id: number): Promise<KQueryResult> {
    const result = await this.client.query
      .from(this.tableName)
      .where({ id })
      .first<Promise<KQueryResult>>();

    return result;
  }

  async findAll<TArgs extends AllFindAllArgs, KResult>(
    args?: TArgs & { userEncoded?: string },
  ): Promise<KResult> {
    const query = this.client.query
      .from(this.tableName)
      .returning<Promise<KResult>>('*');

    const {
      filter,
      limit,
      // * For protected requests
      // userEncoded,
    } = args || {};

    if (filter) {
      await getFilterQuery(query, filter);
    }

    if (limit) {
      query.limit(limit);
    }

    const resultsFiltered = await query;
    return resultsFiltered;
  }

  async create<TArgs extends AllCreateInputs, KResult>(
    input: TArgs,
  ): Promise<KResult> {
    const [result] = await this.client.query
      .from(this.tableName)
      .insert(input)
      .returning<Promise<[KResult]>>('*');

    return result;
  }

  async update<TArgs extends AllUpdateInputs, KResult>(
    id: number,
    input: TArgs,
  ): Promise<KResult> {
    const [result] = await this.client.query
      .from(this.tableName)
      .update(input)
      .where({ id })
      .returning<Promise<[KResult]>>('*');

    return result;
  }

  async delete(id: number) {
    const result = await this.client.query
      .from(this.tableName)
      .where({ id })
      .del();

    return checkIfDeleted({ result });
  }
}

export default CoreDatamapper;
