import connectDB from "@/lib/mongodb";
import CartItem from "@/models/CartItem";

export default async function handler(req, res) {
  await connectDB();
  switch (req.method) {
    case "GET":
      try {
        const { userId } = req.query;
        if (!userId) return res.status(400).json({ error: "userId is required" });
        const items = await CartItem.find({ userId });
        const totalAmount = items.reduce((sum, item) => sum + item.price * item.qty, 0);
        res.status(200).json({ items, totalAmount });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    case "POST":
      try {
        const { userId, name, price, qty } = req.body;
        let existingItem = await CartItem.findOne({ userId, name });
        if (existingItem) {
          existingItem.qty += qty;
          await existingItem.save();
          res.status(200).json({
            message: `${name} quantity updated`,
            item: existingItem,
          });
        } else {
          const newItem = new CartItem({ userId, name, price, qty });
          await newItem.save();
          res.status(201).json(newItem);
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    case "PUT":
      try {
        const { id, qty, price } = req.body;
        const updatedItem = await CartItem.findByIdAndUpdate(
          id,
          { qty, price },
          { new: true }
        );
        if (!updatedItem)
          return res.status(404).json({ error: "Item not found" });
        res.status(200).json(updatedItem);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;
        const deletedItem = await CartItem.findByIdAndDelete(id);
        if (!deletedItem)
          return res.status(404).json({ error: "Item not found" });
        res.status(200).json(deletedItem);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
      break;
  }
}
