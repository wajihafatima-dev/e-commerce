"use client";

import { Card, CardContent, Typography, Button, Box, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, getCart } from "@/utils/cartUtils";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [imgError, setImgError] = useState(false);

  if (!product) return null;

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const items = await getCart();
      setCart(items || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleAdd = async () => {
    try {
      await addToCart({ ...product, qty: 1 });
      await fetchCart();
      toast.success(`${product.name} added to cart!`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add to cart");
    }
  };

  const handleViewClick = () => {
    router.push(`/menu/${product._id}`);
  };

  return (
    <Box>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          "&:hover": { boxShadow: 6, transform: "scale(1.01)" },
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "330px" },
          minWidth: "300px",
        }}
      >
        <Box
          component="img"
          src={
            imgError
              ? "https://placehold.co/300x300/CCCCCC/666666?text=Image+Error"
              : product.image || "/placeholder.jpg"
          }
          alt={product.name || "Product"}
          onError={() => setImgError(true)}
          onClick={handleViewClick}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            cursor: "pointer",
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: "18px",
              color: "text.primary",
              mb: 0.5,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={product.name}
          >
            {product.name}
          </Typography>

          <Typography
            variant="body2"
            color="primary"
            fontWeight="medium"
            sx={{ mb: 1 }}
          >
            {product.category}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                sx={{
                  color: i < (product.rating || 0) ? "gold" : "grey.400",
                  fontSize: 20,
                }}
              />
            ))}
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            color="text.primary"
            sx={{ mt: "auto", mb: 2 }}
          >
            ${product.price?.toFixed(2)}
          </Typography>

          {/* Buttons side by side on large, stacked on mobile */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 1.2,
                fontWeight: "medium",
                textTransform: "none",
                borderRadius: 2,
                backgroundColor: "#2e7d32", // success green
                boxShadow: 2,
                "&:hover": { backgroundColor: "#1b5e20" },
              }}
              onClick={handleAdd}
            >
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                py: 1.2,
                fontWeight: "medium",
                textTransform: "none",
                borderRadius: 2,
                color: "#2e7d32",
                borderColor: "#2e7d32",
                "&:hover": {
                  borderColor: "#1b5e20",
                  color: "#1b5e20",
                  backgroundColor: "rgba(46,125,50,0.05)",
                },
              }}
              onClick={handleViewClick}
            >
              View Details
            </Button>
          </Box>
        </CardContent>
      </Card>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};

export default ProductCard;
