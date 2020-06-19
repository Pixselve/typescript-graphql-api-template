import { Field, InputType } from "type-graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class LoginInput {
  @Field(returns => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(returns => String)
  @IsNotEmpty()
  @MinLength(3)
  password: string;
}
