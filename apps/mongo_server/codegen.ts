import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/schemas/generalSchema.gql",
  generates: {
    "./types/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
    },
  },
};

export default config;
