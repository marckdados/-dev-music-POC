import { QueryResult, QueryResultRow } from "pg";
import { register } from "../repositores/user.repositores.js";
import bcrypt from "bcrypt";

type signUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function signUpService(
  signUp: signUpType
): Promise<QueryResult<QueryResultRow>> {
  try {
    const hashPassword = bcrypt.hashSync(signUp.password, 10);
    signUp.password = hashPassword;
    await register(signUp);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
