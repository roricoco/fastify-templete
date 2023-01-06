import { FastifyReply, FastifyRequest, fastify } from "fastify";

const router = async function (fastify: any) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return {
        router: request?.routerPath,
        query: request?.query,
        message: "You're in test page!",
      };
    }
  );
};

export default router;
