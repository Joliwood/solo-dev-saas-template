import { join } from 'path';

import { createSchema } from 'graphql-yoga';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const typeDefs = loadFilesSync(join(__dirname, '../schemas'), { extensions: ['gql'] });
const loadedResolvers = loadFilesSync(join(__dirname, '../resolvers'), { extensions: ['ts', 'js'] });

const resolvers = mergeResolvers(loadedResolvers);

export const schema = createSchema({
  typeDefs,
  resolvers,
});
