import { type IncomingMessage } from 'http';

import { type YogaInitialContext } from 'graphql-yoga';

import {
  type QueryUsersArgs,
  type UserCreateInput,
  type UserUpdateInput,
} from './__generated__/graphql';

import { type UserDatamapper } from '#datamappers-server';

export type ProfileJWT = {
  id: number,
  ip: string,
  iat: number,
  exp: number,
};

export interface GraphQLContext extends YogaInitialContext {
  userEncoded?: string;
  req: IncomingMessage;
  dataSources: {
    serverDbDatasource: {
      userDatamapper: UserDatamapper;
    };
  };
}

// --- Core datamapper generic methods --- //

export type AllFindAllArgs<TArgs = Partial<
& QueryUsersArgs
> | undefined> = TArgs;

export type AllCreateInputs<TArgs =
| UserCreateInput
,> = TArgs;

export type AllUpdateInputs<TArgs = Partial<
| UserUpdateInput
>> = TArgs;
