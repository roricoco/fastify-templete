import { FastifyReply, FastifyRequest, fastify } from "fastify";
const router = async function (fastify: any, opts: any) {
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      console.log(request?.query);
      return { message: "Hello! Welcome to my Fastify Templete v1.0.0!" };
    }
  );
};

export default router;
