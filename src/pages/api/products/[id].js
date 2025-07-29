import connectDB from "@/lib/mongodb";
import Products from "@/models/Products";

export default async function handler(req, res) {
  await connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const product = await Products.findById(id);
      if (!product) return res.status(404).json({ error: "Product not found" });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching product" });
    }
  }

  if (req.method === "PUT") {
    try {
      const updated = await Products.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update product" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await Products.findByIdAndDelete(id);
      return res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete product" });
    }
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
