"use client";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { addToCart } from "@/utils/cartUtils";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleViewClick = () => {
    router.push(`/products/${product._id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        component={"img"}
        src={product.image}
        alt={product.name}
        sx={{
          width: "100%",
          minWidth: "300px",
          height: 250,
          py: 2,
        }}
        style={{
          objectFit: "contain",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom noWrap>
          {product.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#0E492B" }}
          fontWeight={700}
          mt={1}
        >
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ color: "#4E6f3f", borderColor: "#4E6f3f" }}
          onClick={handleViewClick}
        >
          View
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4E6f3f" }}
          size="small"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
