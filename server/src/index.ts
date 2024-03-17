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
app.use(bodyParser.urlencoded({ extended: true }));

// ------------- Resolver / TypeDefs ---------- \\
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

export default async function main() {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>({
      origin: "http://localhost:3000",
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server)
  );

  await new Promise<void>((resolve) => {
    httpServer.listen(5000, resolve);
  });
  console.log(`🚀 Server ready at http://localhost:5000/`);
}

main().catch((err) => console.log(err));
