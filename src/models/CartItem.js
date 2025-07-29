import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  qty: Number
}, { timestamps: true });

export default mongoose.models.CartItem || mongoose.model("CartItem", CartItemSchema);
