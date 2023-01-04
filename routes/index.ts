import { FastifyReply, FastifyRequest, fastify } from "fastify";

const router = async function (fastify: any, opts: any) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { root: true };
    }
  );
};

export default router;
