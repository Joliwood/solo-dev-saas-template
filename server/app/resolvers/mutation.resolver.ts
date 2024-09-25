import {
  type MutationResolvers,
  type User,
} from '../../types/__generated__/graphql';

import { type GraphQLContext } from '#serverTypes';

const Mutation: MutationResolvers<GraphQLContext> = {
  async updateUser(_, args, { dataSources }) {
    const { id, input } = args;

    const user = await dataSources
      .serverDbDatasource
      .userDatamapper
      .update<typeof input, User>(id, input);

    return user;
  },

  async deleteUser(_, args, { dataSources }) {
    const { id: userId } = args;

    const isUserDeleted = await dataSources
      .serverDbDatasource
      .userDatamapper
      .delete(userId);

    return isUserDeleted;
  },
};

export default Mutation;
