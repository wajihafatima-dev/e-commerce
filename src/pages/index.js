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
       sdf
      </Container>
    </Box>
  );
}
