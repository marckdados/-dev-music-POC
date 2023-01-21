import { Pool } from "pg";

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "admin",
  database: "dev-music-poc",
});

export default connection;
