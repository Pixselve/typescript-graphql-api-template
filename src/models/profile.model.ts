import { Ctx, Field, Int, ObjectType } from "type-graphql";
import { Context } from "../utils/types";
import { User } from "./user.model";

@ObjectType()
export class Profile {
  @Field((returns) => Int)
  id: number;

  @Field((returns) => String, { nullable: true })
  bio?: string;

  @Field((returns) => Int)
  userId: number;

  @Field((returns) => User)
  async user(@Ctx() { prisma }: Context) {
    return prisma.user.findOne({ where: { id: this.id } });
  }
}
