import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { createStitchedSchema } from './schema';

async function main() {
  const schema = await createStitchedSchema();

  const yoga = createYoga({ schema });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.log('🚀 Gateway ready at http://localhost:4000/graphql');
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
