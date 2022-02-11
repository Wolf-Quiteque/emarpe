import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { id } = data;

  const client = await clientPromise;
  const db = client.db("ipo");
  const result = await db
    .collection("empresas")
    .deleteOne({ _id: new ObjectId(id) });
}

export default handler;
