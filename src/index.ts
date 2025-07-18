import "dotenv/config";
import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  return 'OK';
});

const port = Number(process.env.PORT) || 1;

fastify.listen({ port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${port}`);
});
