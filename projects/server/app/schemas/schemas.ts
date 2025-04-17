import { readFileSync } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const typeDefs = readFileSync(`${dirname}/generalSchema.gql`, 'utf-8');

export default typeDefs;
