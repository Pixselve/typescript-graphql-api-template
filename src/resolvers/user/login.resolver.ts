import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Context, JWTUser } from "../../utils/types";
import { AuthPayload } from "../../models/authPayload.model";
import { LoginInput } from "./input/login.input";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

@Resolver()
export default class LoginResolver {
  @Mutation((returns) => AuthPayload)
  async login(
    @Ctx() { prisma }: Context,
    @Arg("user") { email, password }: LoginInput
  ) {
    const user = await prisma.user.findOne({ where: { email } });
    if (!user) throw new Error("BadEmail");
    if (!(await compare(password, user.password)))
      throw new Error("BadPassword");

    //  Generate a Json Web Token
    const token = sign({ email, id: user.id } as JWTUser, "TypeGraphQL"); //Using the same secret as in index.ts. You should use an environment variable.
    return { token, user };
  }
}
