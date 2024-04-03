import { BatchedSQLDataSource } from '@nic-jennings/sql-datasource';

import {
  UserDatamapper,
} from '#datamappers';
import { type CoreDatamapperOptions, type ServerDbDatasourceType } from '#types';
import { TableNamesEnum } from '#enums';

export default class ServerDbDatasource extends BatchedSQLDataSource {
  userDatamapper: UserDatamapper;

  constructor(
    config: CoreDatamapperOptions & ServerDbDatasourceType,
  ) {
    super(config);
    const { db: client } = this;

    this.userDatamapper = new UserDatamapper(
      client,
      TableNamesEnum.USER,
    );

    this.userDatamapper.init();
  }
}
