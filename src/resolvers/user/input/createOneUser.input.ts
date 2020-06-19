import { Field, InputType } from "type-graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class CreateOneUserInput {
  @Field(returns => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(returns => String)
  @IsNotEmpty()
  @MinLength(3)
  password: string;

  @Field(returns => String)
  @IsNotEmpty()
  name: string;
}
