import { QueryResult } from "pg";
import connection from "../database/db.js";

type signUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function register({
  name,
  email,
  password,
}: signUpType): Promise<QueryResult> {
  return connection.query(
    `
            INSERT INTO
                users(name, email, password)
            VALUES
                ($1, $2, $3);
        `,
    [name, email, password]
  );
}
