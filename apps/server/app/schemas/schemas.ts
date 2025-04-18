import { readFileSync } from 'fs';

const dirname = __dirname;
const typeDefs = readFileSync(`${dirname}/generalSchema.gql`, 'utf-8');

export default typeDefs;
