import { z } from "zod";
import {
  userResponseSchema,
  userSchema,
  loginSchema,
  listUserSchema,
} from "../Schemas/User";

type IUserRequest = z.infer<typeof userSchema>;
type IUsers = z.infer<typeof listUserSchema>;
type IUser = z.infer<typeof userResponseSchema>;
type ILogin = z.infer<typeof loginSchema>;

export type { IUser, IUserRequest, IUsers, ILogin };
