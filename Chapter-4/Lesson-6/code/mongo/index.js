import { MongoClient } from "mongodb";

// connect to db server (connection string)
export async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb://localhost:27017/todo");
  return client;
}


// Setup 
// Install: https://www.mongodb.com/try/download/community
// Download compass: https://www.mongodb.com/try/download/compass
// npm install mongodb 
