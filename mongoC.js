import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

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
export default db;