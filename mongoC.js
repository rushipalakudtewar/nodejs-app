import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

// Call dotenv.config() to load environment variables from .env file
dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://techgroniva_db_user:${password}@dev-cluster.untcpls.mongodb.net/?appName=dev-cluster`; // clustore url

const client = new MongoClient(connectionString);
let conn;
let db;
try {
  await client.connect();
  console.log("Connection successful");

  db = client.db("techgroniva_db_user");
} catch(e) {
  console.error(e);
}
// let db = conn.db("techgroniva_db_user");
export default db;