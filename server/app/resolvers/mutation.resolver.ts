import type {
  MutationResolvers,
} from '../../types/__generated__/graphql';

import { type GraphQLContext } from '#types';

// TODO - Les types du core datamapper ne remontent pas dans chaque datamapper

const Mutation: MutationResolvers<GraphQLContext> = {
  async updateUser(_, args, { dataSources }) {
    const user = await dataSources
      .serverDbDatasource
      .userDatamapper
      .update(args.id, args.input);
    return user;
  },

  async deleteUser(_, args, { dataSources }) {
    const userId = args.id;

    const userToDelete = await dataSources
      .serverDbDatasource
      .userDatamapper
      .delete(userId);

    return userToDelete;
  },
};

export default Mutation;
