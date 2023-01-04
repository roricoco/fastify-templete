import { FastifyReply, FastifyRequest, fastify } from "fastify";

const router = async function (fastify: any, opts: any) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      return "router test";
    }
  );
};

export default router;
