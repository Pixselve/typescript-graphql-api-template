import { Field, InterfaceType, ObjectType } from "type-graphql";
import { User } from "./user.model";

@ObjectType()
export class AuthPayload {
  @Field((type) => String)
  token: string;

  @Field((type) => User)
  user: User;
}
