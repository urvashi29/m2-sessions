import { connectToDatabase } from "@/mongo";

export default async function handler(req, res) {
  // console.log(req);
  // if (req.method == "GET") {
  //   res.status(200).json({ name: "John Doe" });
  // } else {
  //   res.status(404).json({ mesasge: "error" });
  // }

  const client = await connectToDatabase();
  const db = client.db();
  const userCollection = db.collection("users");
  const users = await userCollection.find().toArray();

  res.status(200).json(users);
}
