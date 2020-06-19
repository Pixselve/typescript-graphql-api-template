import { Ctx, Query, Resolver } from "type-graphql";
import { Post } from "../../models/post.model";
import { Context } from "../../utils/types";

@Resolver()
export default class FindManyPostsResolver {
  @Query(returns => [Post])
  async posts(
    @Ctx() { prisma }: Context
  ) {
    return prisma.post.findMany();
  }
}
