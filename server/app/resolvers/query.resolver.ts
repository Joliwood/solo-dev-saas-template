import { compare } from 'bcrypt';
import { GraphQLError } from 'graphql';
import { sign } from 'jsonwebtoken';

import type { QueryResolvers } from '../../types/__generated__/graphql';

import { isEqual } from '#utils';
import type { GraphQLContext } from '#types';

const Query: QueryResolvers<GraphQLContext> = {
  async users(_, __, { dataSources }) {
    const rows = await dataSources.serverDbDatasource.userDatamapper.findAll();
    return rows;
  },

  async user(_, args, { dataSources }) {
    const row = await dataSources.serverDbDatasource.userDatamapper.idsLoader.load(
      args.id,
    );
    return row;
  },

  async login(_, args, { dataSources }) {
    const { email, password } = args.input;

    const [user] = await dataSources.serverDbDatasource.userDatamapper.findAll({
      email,
    });

    if (!user || !user.password) {
      throw new GraphQLError('Authentication failed', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      });
    }

    const isPasswordValid = user.email === 'admin@gmail.com'
      ? isEqual(password, user.password)
      : await compare(password, user.password);

    if (!isPasswordValid) {
      throw new GraphQLError('Authentication failed again', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      });
    }

    if (process.env.JWT_SECRET == null) {
      throw new GraphQLError('JWT_SECRET not provided', {
        extensions: {
          code: 'ENV_SETUP',
        },
      });
    }

    const userInfos = {
      id: user.id,
    };

    const token = sign(userInfos, process.env.JWT_SECRET, {
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
