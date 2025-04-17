import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_SERVER_URL,
  documents: [
    'src/requests/queries/*.{ts,tsx}',
    'src/requests/mutations/*.{ts,tsx}',
  ],
  generates: {
    './src/types/__generated_schemas__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
