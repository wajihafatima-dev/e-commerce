"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation"; // useRouter ke jagah
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams(); // URL se id direct le rahe hain
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then(setProduct);
    }
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ background: "#f7f5f2", minHeight: "100vh", py: 5 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#ff4d4d" }}>
              {product.name}
            </Typography>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "medium" }}>
              ${product.price}
            </Typography>
            <Typography sx={{ mt: 2 }}>{product.description}</Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#ff4d4d",
                "&:hover": { backgroundColor: "#e64444" },
              }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
