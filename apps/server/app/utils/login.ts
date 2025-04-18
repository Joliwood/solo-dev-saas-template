/* eslint-disable turbo/no-undeclared-env-vars */
import { compare } from 'bcryptjs';
import { GraphQLError } from 'graphql';
import * as process from 'process';

import { type User } from '../../types/__generated__/graphql';

import isEqual from './isEqual';

type Args = {
  user: User | null;
  password: string;
};

async function login(args: Args) {
  const { user, password } = args;

  if (!user || !user.password) {
    throw new GraphQLError('Authentication failed', {
      extensions: {
        code: 'UNAUTHENTICATED',
        desc: 'User not found or password not set',
      },
    });
  }

  const isPasswordValid =
    user.email === 'admin@gmail.com'
      ? isEqual(password, user.password)
      : await compare(password, user.password);

  if (!isPasswordValid) {
    throw new GraphQLError('Authentication failed', {
      extensions: {
        code: 'UNAUTHENTICATED',
        desc: 'Invalid password',
      },
    });
  }

  if (process.env.JWT_SECRET == null) {
    throw new GraphQLError('Authentication failed', {
      extensions: {
        code: 'ENV_SETUP',
        desc: 'JWT_SECRET not provided',
      },
    });
  }

  return user.id;
}

export default login;
