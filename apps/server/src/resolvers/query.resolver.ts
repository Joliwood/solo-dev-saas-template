/* eslint-disable turbo/no-undeclared-env-vars */
import jwt from 'jsonwebtoken';
import * as process from 'process';

// import type { QueryResolvers, User } from '../../types/__generated__/graphql';

import { login } from '#utils-server';
import { type customTypes, type schema } from '#types-server';

const Query: schema.QueryResolvers<customTypes.GraphQLContext> = {
  async users(_, args, { dataSources }) {
    const { limit, filter } = args;

    const users = await dataSources.serverDbDatasource.userDatamapper.findAll<
      typeof args,
      schema.User[]
    >({ limit, filter });

    return users;
  },

  async user(_, args, { dataSources }) {
    const { id: userId } = args;

    const user: Promise<schema.User> =
      await dataSources.serverDbDatasource.userDatamapper.idsLoader.load(
        userId
      );

    return user;
  },

  async login(_, args, { dataSources }) {
    const { email, password } = args.input;

    const user =
      await dataSources.serverDbDatasource.userDatamapper.connectByEmail(email);

    const userId = login({ user, password });

    // The JWT is already checked in the login function
    const token = jwt.sign(userId, process.env.JWT_SECRET!, {
      expiresIn: Number(process.env.JWT_TTL),
    });
    const expireAt = new Date();
    expireAt.setSeconds(expireAt.getSeconds() + Number(process.env.JWT_TTL));

    return {
      token,
      expire_at: expireAt.toString(),
    };
  },
};

export default Query;
