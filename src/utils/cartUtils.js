// Helper: get userId from localStorage
const getUserId = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("userId"); // assume you store userId in localStorage
};

// Get cart items for current user
export const getCart = async () => {
  try {
    const userId = getUserId();
    if (!userId) return [];

    const res = await fetch(`/api/cart?userId=${userId}`, {
      method: "GET",
    });

    if (!res.ok) throw new Error("Failed to fetch cart");

    return await res.json();
  } catch (error) {
    console.error("Error fetching cart:", error);
    return [];
  }
};

export const addToCart = async ({ name, price, qty }) => {
  try {
    const userId = getUserId();
    if (!userId) throw new Error("User not logged in");

    const res = await fetch(`/api/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, name, price, qty }),
    });

    if (!res.ok) throw new Error("Failed to add to cart");
    return await res.json(); 
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const updateCartItem = async ({ id, qty, price }) => {
  try {
    const res = await fetch(`/api/cart`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, qty, price }),
    });

    if (!res.ok) throw new Error("Failed to update cart item");
    return await res.json(); 
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

// Remove item from cart
export const removeFromCart = async (id) => {
  try {
    const res = await fetch(`/api/cart?id=${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to remove item");
    return await res.json(); 
  } catch (error) {
    console.error("Error removing cart item:", error);
  }
};

// Clear frontend cart (state)
export const clearCart = () => {
  return [];
};
