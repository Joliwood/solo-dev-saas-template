import { type Resolvers } from '../../types/__generated__/graphql';

import {
  User,
  Query,
  Mutation,
} from '#resolvers';
import { type GraphQLContext } from '#types';

const allResolvers: Resolvers<GraphQLContext> = {
  User,
  Query,
  Mutation,
};

export default allResolvers;
