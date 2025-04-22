import { type CodegenConfig } from '@graphql-codegen/cli';

import * as process from 'process';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_SERVER_URL,
  documents: [
    'requests/queries/*.{ts,tsx}',
    'requests/mutations/*.{ts,tsx}',
  ],
  generates: {
    './types/__generated_schemas__/': {
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
