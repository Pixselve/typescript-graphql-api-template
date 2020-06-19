import { AuthChecker } from "type-graphql";
import { Context } from "./types";

const authChecker: AuthChecker<Context> = (
  { root, args, context, info },
  roles
) => {
  if (roles.includes("USER")) {
    return !!context.user;
  }
  return true; // or false if access is denied
};

export default authChecker;
