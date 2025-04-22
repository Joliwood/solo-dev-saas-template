import { nextJsConfig } from "@workspace/eslint_config/next-js"

/** @type {import("eslint").Linter.Config} */
const config = [
    ...nextJsConfig,
  {
    ignores: ["**/__generated_schemas__/**"]
  }
]

export default config