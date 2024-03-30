import { type Resolvers } from '../../types/__generated__/graphql';

import {
  Artist,
  Query,
  Mutation,
} from '#resolvers';

const generalResolver: Resolvers = {
  Artist,
  Query,
  Mutation,
};

export default generalResolver;
