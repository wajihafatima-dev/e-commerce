import connectDB from "@/lib/mongodb";
import CartItem from "@/models/CartItem";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const { userId } = req.query;
    const cart = await CartItem.find({ userId });
    return res.status(200).json(cart);
  }

  if (req.method === "POST") {
    const item = await CartItem.create(req.body);
    return res.status(201).json(item);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    await CartItem.findByIdAndDelete(id);
    return res.status(200).json({ message: "Item removed" });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
