import type {
  MutationResolvers,
} from '../../types/__generated__/graphql';

import { type GraphQLContext } from '#types';

// TODO - Les types du core datamapper ne remontent pas dans chaque datamapper

const Mutation: MutationResolvers<GraphQLContext> = {
  async updateArtist(_, args, { dataSources }) {
    const artist = await dataSources
      .serverDbDatasource
      .artistDatamapper
      .update(args.id, args.input);
    return artist;
  },

  async deleteArtist(_, args, { dataSources }) {
    const artistId = args.id;

    const artistToDelete = await dataSources
      .serverDbDatasource
      .artistDatamapper
      .delete(artistId);

    return artistToDelete;
  },
};

export default Mutation;
