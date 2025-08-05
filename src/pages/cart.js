"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { getCart, removeFromCart, updateQty } from "@/utils/cartUtils";
import Modal from "./components/Modal";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleQtyChange = (id, newQty) => {
    updateQty(id, newQty);
    setCart(getCart());
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Box
      sx={{
        pt: 10,
        px: { xs: 2, sm: 4, md: 8 },
        pb: 6,
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography sx={{ mt: 4 }} color="text.secondary">
          Your cart is currently empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    width: "100%",
                    maxWidth: "400px",
                    minWidth: "250px",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography sx={{ mt: 1 }} color="text.secondary">
                      Price per unit: ${item.price}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        gap: 1,
                      }}
                    >
                      <Typography>Qty:</Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleQtyChange(item._id, item.qty - 1)}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography>{item.qty}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleQtyChange(item._id, item.qty + 1)}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" color="primary">
                      Total: ${item.price * item.qty}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
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
              Total Amount: ${totalAmount}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#ff4d4d",
                px: { xs: 1, md: 4 },
                "&:hover": {
                  backgroundColor: "#e64444",
                },
              }}
              onClick={handleOpen}
            >
              Proceed to Checkout
            </Button>
            <Modal
              btntext="yes,proceed"
              open={open}
              handleClose={() => setOpen(false)}
              title="Confirm Checkout"
              message="Are you sure you want to proceed to checkout? You can review your order before final confirmation."
            />
          </Box>
        </>
      )}
    </Box>
  );
}
