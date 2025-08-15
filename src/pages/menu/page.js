"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const categories = ["All", "Gourmet Pizzas", "Burgers", "Desserts", "Drinks"];

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
        (product) => product.category === selectedCategory
      );

  return (
    <Box sx={{ background: "#f7f5f2", minHeight: "100vh", py: 5 }}>
      {/* Tabs */}
      <Box sx={{ textAlign: "center", mb: {xs:2,md:3} }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          OUR MENU
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 1, md: 4 }, flexWrap: "wrap" }}>
          {categories.map((tab) => (
            <Button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              sx={{
                background: selectedCategory === tab ? "#ff4d4d" : "#fff",
                color: selectedCategory === tab ? "#fff" : "#0E492B",
                borderRadius: 20,
                px: 3,
                boxShadow: 1,
                fontWeight: "bold",
                "&:hover": { background: "#ff4d4d", color: "#fff" },
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          py: 4,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
}
