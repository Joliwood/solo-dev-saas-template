import type {
  MutationResolvers,
} from '../../types/__generated__/graphql';

const Mutation: MutationResolvers = {
  async updateArtist(_, args, { dataSources }) {
    const artist = await dataSources
      .lyricsdb
      .artistDatamapper
      .update(args.id, args.input);
    return artist;
  },

  async deleteArtist(_, args, { dataSources }) {
    const artistId = args.id;

    await dataSources
      .lyricsdb
      .artistLikeSongDatamapper
      .deleteByArtist(artistId);

    const artistToDelete = await dataSources
      .lyricsdb
      .artistDatamapper
      .delete(artistId);

    return artistToDelete;
  },
};

export default Mutation;
