import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { Context } from "../../utils/types";
import { CreateOneUserInput } from "./input/createOneUser.input";
import { hash } from "bcryptjs";
import { User } from "../../models/user.model";

@Resolver()
export default class CreateOneUserResolver {
  // You have to be authenticated to create a user
  @Authorized(["USER"])
  @Mutation((returns) => User)
  async createOneUser(
    @Ctx() { prisma }: Context,
    @Arg("user") { email, name, password }: CreateOneUserInput
  ) {
    // We hash the password using bcryptjs
    const hashedPassword = await hash(password, 10);
    return prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
  }
}
