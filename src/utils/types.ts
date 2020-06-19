import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export interface Context {
  prisma: PrismaClient;
  user?: JWTUser;
}

export interface JWTUser {
  id: number;
  email: string;
}

export interface AuthRequest extends Request {
  user?: JWTUser
}
