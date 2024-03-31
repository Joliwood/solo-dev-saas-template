import { type IncomingMessage } from 'http';

import { type YogaInitialContext } from 'graphql-yoga';
import { type Config } from 'knex';

import { type Artist } from './__generated__/graphql';

// TODO - Ts doesn't check types not resolved in this file

export interface CoreDatamapperOptions {
  email?: string;
  limit?: number;
  filter?: {
    duration_filter: DurationRange
    release_year: ReleaseYear
    name: string
  };
}

export interface ServerDbDatasourceType {
  knexConfig: Config;
}

export type ProfileJWT = {
  id: number,
  ip: string,
  iat: number,
  exp: number,
};

export interface GraphQLContext extends YogaInitialContext {
  userEncoded: string;
  req: IncomingMessage;
  dataSources: {
    serverDbDatasource: {
      artistDatamapper: ArtistDatamapper;
    };
  };
}

// Update for all resolver which will use each method

export type AllFindAll = Artist[];
export type AllFindById = Artist;
export type AllCreate = Artist;
export type AllUpdate = Artist;
