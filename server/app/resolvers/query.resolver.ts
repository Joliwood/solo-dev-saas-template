import { sign } from 'jsonwebtoken';

import type { QueryResolvers, User } from '../../types/__generated__/graphql';

import { login } from '#utils';
import type { GraphQLContext } from '#types';

const Query: QueryResolvers<GraphQLContext> = {
  async users(_, args, { dataSources }) {
    const { limit, filter } = args;

    const users = await dataSources
      .serverDbDatasource
      .userDatamapper
      .findAll<typeof args, User[]>({ limit, filter });

    return users;
  },

  async user(_, args, { dataSources }) {
    const { id: userId } = args;

    const user: Promise<User> = await dataSources
      .serverDbDatasource
      .userDatamapper
      .idsLoader
      .load(userId);

    return user;
  },

  async login(_, args, { dataSources }) {
    const { email, password } = args.input;

    const user = await dataSources
      .serverDbDatasource
      .userDatamapper
      .connectByEmail(email);

    const userId = login({ user, password });

    // The JWT is already checked in the login function
    const token = sign(userId, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_TTL,
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
