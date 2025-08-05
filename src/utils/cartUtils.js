// utils/cartUtils.js

// Get cart from localStorage
export const getCart = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    return [];
  }
};

// Save updated cart
export const saveCart = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Add new product or increment qty
export const addToCart = (product) => {
  if (typeof window === "undefined") return;

  let cart = getCart();
  const existingItem = cart.find((item) => item._id === product._id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
};

// Remove item from cart by ID
export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item._id !== id);
  saveCart(cart);
};

// Update item quantity directly
export const updateQty = (id, qty) => {
  const cart = getCart().map((item) =>
    item._id === id ? { ...item, qty: Math.max(1, qty) } : item
  );
  saveCart(cart);
};

// Clear the entire cart
export const clearCart = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cart");
  }
};
