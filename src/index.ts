import "dotenv/config";
import Fastify from "fastify";
import { appRoutes } from '@/routes';

const fastify = Fastify({ logger: true });

await appRoutes(fastify);

const port = Number(process.env.PORT) || 3000;

fastify.listen({ port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${port}`);
});
