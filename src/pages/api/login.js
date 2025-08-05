// pages/api/login.js
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== "POST") return res.status(405``).json({ message: "Method not allowed" });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
