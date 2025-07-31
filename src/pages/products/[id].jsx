"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { addToCart } from "@/utils/cartUtils"; // Utility function import

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then(setProduct);
    }
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    alert(`${product.name} added to cart!`); // Confirmation
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        margin: "auto",
        gap: { xs: 1, sm: 4 },
        pt: { xs: 4, sm: 6, md: 0 },
        pb: { xs: 4, sm: 0 },
      }}
    >
      {/* Product Image */}
      <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Product Details */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#ff4d4d",
            fontSize: isSmall ? "1.8rem" : isMedium ? "2.4rem" : "3rem",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            pt: { sm: 1 },
            fontWeight: "medium",
            fontSize: isSmall ? "1.2rem" : isMedium ? "1.4rem" : "1.6rem",
          }}
        >
          ${product.price}
        </Typography>
        <Typography
          sx={{ pt: { sm: 1 }, fontSize: isSmall ? "0.9rem" : "1rem" }}
        >
          {product.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#4E6f3f",
            alignSelf: "flex-start",
            "&:hover": { backgroundColor: "#3b522f" },
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Box>
    </Container>
  );
}
