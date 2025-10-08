"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  CardContent,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import { getCart, updateCartItem, removeFromCart } from "@/utils/cartUtils";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const data = await getCart(); // { items, totalAmount }
    setCartItems(data.items || []);
    setTotalAmount(data.totalAmount || 0);
  };

  const handleQtyChange = async (id, qty, price) => {
    if (qty < 1) return;
    await updateCartItem({ id, qty, price });
    fetchCart();
  };

  const handleDelete = async (id) => {
    await removeFromCart(id);
    fetchCart();
  };

  return (
    <Box
      sx={{
        pt: 10,
        px: { xs: 2, sm: 2, md: 6 },
        pb: 6,
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">
        🛒 Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography sx={{ mt: 4 }} color="text.secondary">
          Your cart is currently empty.
        </Typography>
      ) : (
        <>
          <Grid
            container
            gap={5}
            justifyContent="center"
          >
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item._id}>
                <Box
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    px: 1,
                    width: "100%",
                    height: "100%", 
                    transition: "0.3s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: "15px",
                          whiteSpace: "nowrap", // prevent wrapping
                          overflow: "hidden", // hide overflowed text
                          textOverflow: "ellipsis", // show "..."
                          maxWidth: "100px", // control text width
                          display: "block", // required for ellipsis
                        }}
                        title={item.name} // 👈 hover pe full name dikhega
                      >
                        {item.name}
                      </Typography>

                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => handleDelete(item._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>

                    {/* Price */}
                    <Typography  color="text.secondary">
                      Price: ${item.price}
                    </Typography>

                    {/* Quantity */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography>Qty:</Typography>
                      <TextField
                        type="number"
                        size="small"
                        value={item.qty}
                        onChange={(e) =>
                          handleQtyChange(
                            item._id,
                            parseInt(e.target.value),
                            item.price
                          )
                        }
                        inputProps={{ min: 1, style: { width: "30px" } }}
                      />
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Total */}
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      fontWeight="bold"
                    >
                      Total: ${item.price * item.qty}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              mt: 6,
              p: 3,
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              CheckOut With Total Amount: ${totalAmount}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}
