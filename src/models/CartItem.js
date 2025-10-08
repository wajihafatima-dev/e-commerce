import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  userId: { type: String, required: true },  
  name: String,
  price: Number,
  qty: { type: Number, default: 1 }
});

export default mongoose.models.CartItem || mongoose.model("CartItem", cartItemSchema);
