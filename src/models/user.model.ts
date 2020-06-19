import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { Context } from "../utils/types";
import { Post } from "./post.model";
import { Profile } from "./profile.model";

@ObjectType()
export class User {
  @Field((returns) => Int)
  id: number;

  @Field((returns) => String)
  email: string;

  @Field((returns) => String)
  name: string;

  // ## We don't want to expose the password
  // @Field((returns) => String)
  // password: string;

  @Field((returns) => Profile, { nullable: true })
  async profile(@Ctx() { prisma }: Context) {
    return prisma.profile.findOne({ where: { userId: this.id } });
  }

  @Field((returns) => [Post])
  async posts(@Ctx() { prisma }: Context) {
    return prisma.post.findMany({ where: { authorId: this.id } });
  }
}
