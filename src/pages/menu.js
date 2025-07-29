"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <Box sx={{ background: "#f7f5f2", minHeight: "100vh", py: 5 }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            OUR MENU
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
            {["Gourmet Pizzas", "Burgers", "Desserts", "Drinks"].map((cat) => (
              <Button
                key={cat}
                sx={{
                  background: "#fff",
                  borderRadius: 20,
                  px: 3,
                  color:"#0E492B",
                  boxShadow: 1,
                  fontWeight: "bold",
                  "&:hover": { background: "#ff4d4d", color: "#fff" },
                }}
              >
                {cat}
              </Button>
            ))}
          </Box>
        </Box>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={3} >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
