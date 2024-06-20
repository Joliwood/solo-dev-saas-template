import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './app/schemas/generalSchema.gql',
  generates: {
    '../common/types/__generated__/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
      ],
    },
  },
};

export default config;
