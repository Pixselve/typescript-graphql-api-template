import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import jwt from "express-jwt";
import { schema } from "./utils/schemaBuilder";
import { AuthRequest, Context } from "./utils/types";
import { PrismaClient } from "@prisma/client";

const app = express();
const path = "/";
const port = process.env.PORT || 4000;
const prisma = new PrismaClient();

async function main() {
  // Create a GraphQL server
  const server = new ApolloServer({
    schema: await schema(),
    context: ({ req }: { req: AuthRequest }): Context => {
      return {
        prisma,
        user: req.user, // `req.user` comes from `express-jwt`
      };
    },
  });

  // Mount a jwt or other authentication middleware that is run before the GraphQL execution
  app.use(
    path,
    jwt({
      secret: "TypeGraphQL",
      credentialsRequired: false,
    })
  );

  // Apply the GraphQL server middleware
  server.applyMiddleware({ app, path });

  // Launch the express server

  await app.listen({ port });
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.disconnect();
  });
