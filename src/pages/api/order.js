import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const { userId } = req.query;
    const orders = await Order.find({ userId });
    return res.status(200).json(orders);
  }

  if (req.method === "POST") {
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
