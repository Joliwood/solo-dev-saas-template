import { BatchedSQLDataSource, type BatchedSQLDataSourceProps } from '@nic-jennings/sql-datasource';

import { UserDatamapper } from '#datamappers';
import { TableNamesEnum } from '#enums';

export default class ServerDbDatasource extends BatchedSQLDataSource {
  userDatamapper: UserDatamapper;

  constructor(
    config: BatchedSQLDataSourceProps,
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
