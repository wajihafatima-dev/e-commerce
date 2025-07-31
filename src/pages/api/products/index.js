import connectDB from "@/lib/mongodb";
import Products from "@/models/Products";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const products = await Products.find();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  if (req.method === "POST") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const { name, price, image, description,category } = data;

      if (!name || !price || !image || !description || !category) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const product = await Products.create({ name, price, image, description,category });
      return res.status(201).json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
