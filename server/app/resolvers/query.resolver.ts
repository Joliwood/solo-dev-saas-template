import { compare } from 'bcrypt';
import { GraphQLError } from 'graphql';
import { jwtDecode } from 'jwt-decode';
import { sign } from 'jsonwebtoken';

import type { QueryResolvers } from '../../types/__generated__/graphql';

import { isEqual } from '#utils';
import type { ProfileJWT } from '#types';

const Query: QueryResolvers = {
  async artists(_, __, { dataSources }) {
    const rows = await dataSources.lyricsdb.artistDatamapper.findAll();
    return rows;
  },

  async artist(_, args, { dataSources }) {
    const row = await dataSources.lyricsdb.artistDatamapper.idsLoader.load(
      args.id,
    );
    return row;
  },

  async login(_, args, { dataSources, req }) {
    const { email, password } = args.input;

    // Use findByEmail to find a user by their email
    const [user] = await dataSources.lyricsdb.artistDatamapper.findAll({
      email,
    });

    if (!user) {
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
      ip: req.ip,
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

  async profile(_, __, { dataSources, userEncoded }) {
    if (!userEncoded) {
      throw new GraphQLError('Authentication failed', {
        extensions: {
          code: 'UNAUTHENTICATED',
        },
      });
    }

    const userDecoded = jwtDecode<ProfileJWT>(userEncoded);
    const { id } = userDecoded;

    const profile = await dataSources.lyricsdb.artistDatamapper.findByPk(id);

    return profile;
  },
};

export default Query;
