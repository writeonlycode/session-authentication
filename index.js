import Fastify from "fastify";
import fastifyCookie from "@fastify/cookie";
import fastifyFormBody from "@fastify/formbody";
import crypto from "node:crypto";
import { indexPage, loginPage } from "./html.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyCookie);
fastify.register(fastifyFormBody);

const users = new Map([
  ["john", "1234567890"],
  ["jane", "0987654321"],
]);

const sessions = new Map();

fastify.get("/", async (request, reply) => {
  const session = request.cookies.session;
  const username = sessions.get(session);

  if (username) {
    reply.type("text/html").send(indexPage(username));
  } else {
    reply.clearCookie("session").redirect("/login");
  }
});

fastify.get("/login", async (request, reply) => {
  const session = request.cookies.session;

  if (session && sessions.has(session)) {
    reply.redirect("/");
  } else {
    reply.type("text/html").send(loginPage());
  }
});

fastify.post("/login", async (request, reply) => {
  const { username, password } = request.body;

  if (users.get(username) === password) {
    const session = crypto.randomBytes(16).toString();
    sessions.set(session, username);
    reply.setCookie("session", session);
    reply.redirect("/");
  } else {
    reply.redirect("/login");
  }
});

fastify.get("/logout", async (request, reply) => {
  const session = request.cookies.session;
  const username = sessions.get(session);

  if (session) {
    reply.clearCookie("session");
  }

  if (username) {
    sessions.delete(session);
  }

  reply.redirect("/");
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
