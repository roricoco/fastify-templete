import * as path from "path";
import { fastify } from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastifySchedule from "@fastify/schedule";
import { AsyncTask, SimpleIntervalJob } from "toad-scheduler";
import AutoLoad from "@fastify/autoload";
import qs from "qs";

const PORT = Number(process.env.PORT || 4000);

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "SYS:yyyy.mm.dd | TT hh:MM:ss",
        ignore: "pid,hostname",
      },
    },
  },
  querystringParser: (str) => qs.parse(str),
});

app.register(cors);
app.register(fastifySchedule);
app.register(jwt, { secret: "supersecret" });
// app.scheduler.addSimpleIntervalJob(schedule);

app.addHook("onRequest", async (req, reply) => {
  const token = req.headers.authorization || "";

  if (token.trim()) {
    try {
      // await req.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  }
});

app.register(AutoLoad, {
  dir: path.join(__dirname, "src/routes"),
  options: Object.assign({}),
});

(async () => {
  await app.listen({ port: PORT });
})();
