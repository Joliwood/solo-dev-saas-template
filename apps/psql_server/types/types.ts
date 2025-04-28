import { type IncomingMessage } from "http";

import { type YogaInitialContext } from "graphql-yoga";

import { type schema } from "#types_psql_server";
import { type UserDatamapper } from "#datamappers_psql_server";

export type ProfileJWT = {
  id: number;
  ip: string;
  iat: number;
  exp: number;
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

export type AllFindAllArgs<TArgs = Partial<schema.QueryUsersArgs> | undefined> =
  TArgs;

export type AllCreateInputs<TArgs = schema.UserCreateInput> = TArgs;

export type AllUpdateInputs<TArgs = Partial<schema.UserUpdateInput>> = TArgs;
