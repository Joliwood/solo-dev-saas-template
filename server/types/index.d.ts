import { type IncomingMessage } from 'http';

import { type YogaInitialContext } from 'graphql-yoga';
import { type Config } from 'knex';

import { type User } from './__generated__/graphql';

import { type UserDatamapper } from '#datamappers';

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
      userDatamapper: UserDatamapper;
    };
  };
}

// Update for all resolver which will use each method

export type AllFindAll = User[];
export type AllFindById = User;
export type AllCreate = User;
export type AllUpdate = User;
