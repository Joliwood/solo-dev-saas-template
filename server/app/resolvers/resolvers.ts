import { type Resolvers } from '../../types/__generated__/graphql';

import {
  Artist,
  Query,
  Mutation,
} from '#resolvers';
import { type GraphQLContext } from '#types';

const allResolvers: Resolvers<GraphQLContext> = {
  Artist,
  Query,
  Mutation,
};

export default allResolvers;
