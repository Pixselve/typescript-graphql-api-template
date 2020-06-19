import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { Context } from "../utils/types";
import { User } from "./user.model";

@ObjectType()
export class Post {
  @Field((returns) => Int)
  id: number;

  @Field((returns) => Date)
  createdAt: Date;

  @Field((returns) => String)
  title: string;

  @Field((returns) => String, { nullable: true })
  content?: string;

  @Field((returns) => Boolean)
  published?: boolean;

  @Field((returns) => Int)
  authorId?: number;

  @Field((returns) => User)
  async author(@Ctx() { prisma }: Context) {
    return prisma.user.findOne({ where: { id: this.authorId } });
  }
}
