import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import { EOL } from 'os';

const dirname = __dirname;
const serverPath = path.dirname(dirname);

const schemaNames = ['user', 'mutation', 'query'];

const generalSchema = schemaNames
  .map((schemaName) => {
    const filePath = path.join(dirname, `../schemas/${schemaName}.gql`);
    return readFileSync(filePath, 'utf-8');
  })
  .join(EOL);

const serverDistPath = path.join(serverPath, './schemas/generalSchema.gql');
writeFileSync(serverDistPath, generalSchema, 'utf-8');

console.log(`Merged schema saved to: ${serverDistPath}`);

export default serverDistPath;
