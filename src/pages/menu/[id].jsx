"use client";
import { addToCart } from "@/utils/cartUtils";
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
import { toast, ToastContainer } from "react-toastify"; // ✅ Correct import
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState({});
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then(setProduct)
        .catch(console.error);
    }
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  const handleAdd = async () => {
    try {
      await addToCart({ ...product, qty: 1 });
      toast.success(`${product.name} added to cart!`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add to cart");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 4 },
        py: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 8 },
          alignItems: "center",
          px: { xs: 0, md: 6 },
        }}
      >
        <Box
          component={"img"}
          src={product.image}
          alt={product.name}
          sx={{
            width: { xs: "100%", sm: "90%", md: "50%" },
            maxWidth: 500,
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#ff4d4d",
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            }}
          >
            {product.name}
          </Typography>

          <Typography
            sx={{
              pt: { xs: 1, sm: 2 },
              fontWeight: "medium",
              fontSize: { xs: "1.2rem", md: "1.6rem" },
            }}
          >
            ${product.price}
          </Typography>

          <Typography
            sx={{
              pt: { xs: 1, sm: 2 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            {product.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#4E6f3f",
              "&:hover": { backgroundColor: "#3b522f" },
              width: { xs: "100%", sm: "auto" }, 
            }}
            onClick={handleAdd}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
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
    </Container>
  );
}
