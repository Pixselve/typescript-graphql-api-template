import { buildSchema } from "type-graphql";
import authChecker from "./authChecker";
import FindManyPostsResolver from "../resolvers/post/findManyPosts.resolver";
import CreateOneUserResolver from "../resolvers/user/createOneUser.resolver";
import LoginResolver from "../resolvers/user/login.resolver";

export const schema = async () =>
  await buildSchema({
    resolvers: [
      FindManyPostsResolver,
      CreateOneUserResolver,
      LoginResolver
    ],
    authChecker: authChecker,
    validate: true
  });
