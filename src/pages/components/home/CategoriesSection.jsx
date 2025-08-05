// components/home/CategoriesSection.js
"use client";
import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const categories = [
  { title: "Pizzas", icon: <LocalPizzaIcon sx={{ fontSize: {xs:50,md:80}, color: "red" }} /> },
  { title: "Burgers", icon: <FastfoodIcon sx={{ fontSize: {xs:50,md:80}, color: "orange" }} /> },
  { title: "Drinks", icon: <LocalDrinkIcon sx={{ fontSize: {xs:50,md:80}, color: "blue" }} /> },
];

const CategoriesSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ height: "100%", py: 8, textAlign: "center", backgroundColor: "#fff" }}>
      <Typography
        fontWeight="bold"
        mb={5}
        sx={{ fontSize: isSmall ? "1.5rem" : "2rem" }}
      >
        🍽 Explore Categories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((cat, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Box
              sx={{
                bgcolor: "#fefefe",
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              {cat.icon}
              <Typography mt={2} sx={{ fontSize: isSmall ? "1rem" : "1.2rem", fontWeight: "600" }}>
                {cat.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesSection;