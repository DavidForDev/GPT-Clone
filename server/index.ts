import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

const app = express();

// ------------- Middleware ---------- \\
config();
app.use(bodyParser.json());

// ------------- Resolver / TypeDefs ---------- \\
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

async function main() {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault(),
    ],
    introspection: true,
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: process.env.CLIENT_SIDE_URL,
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server)
  );

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 5000 }, resolve);
  });
  console.log(`🚀 Server ready at http://localhost:5000/`);
}

main().catch((err) => console.log(err));
