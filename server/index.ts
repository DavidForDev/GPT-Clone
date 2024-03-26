import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();

// ------------- Middleware ---------- \\
config();
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CLIENT_SIDE_URL,
    credentials: true,
  })
);

// ------------- Resolver / TypeDefs ---------- \\
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

async function main() {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  });

  await server.start();

  app.use("/", express.json(), expressMiddleware(server));

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 5000 }, resolve);
  });
  console.log(`🚀 Server is ready`);
}

main().catch((err) => console.log(err));
