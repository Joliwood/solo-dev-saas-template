import { BatchedSQLDataSource } from '@nic-jennings/sql-datasource';

import {
  ArtistDatamapper,
} from '#datamappers';
import { type CoreDatamapperOptions, type ServerDbDatasourceType } from '#types';
import { TableNamesEnum } from '#enums';

export default class ServerDbDatasource extends BatchedSQLDataSource {
  artistDatamapper: ArtistDatamapper;

  constructor(
    config: CoreDatamapperOptions & ServerDbDatasourceType,
  ) {
    super(config);
    const { db: client } = this;

    this.artistDatamapper = new ArtistDatamapper(
      client,
      TableNamesEnum.ARTIST,
    );

    this.artistDatamapper.init();
  }
}
