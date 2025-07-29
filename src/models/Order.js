import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  total: Number,
  status: { type: String, default: "Pending" }
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
