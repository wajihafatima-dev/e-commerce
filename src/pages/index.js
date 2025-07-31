"use client";
import React from "react";
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const HomePage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const categories = [
    { title: "Pizzas", icon: <LocalPizzaIcon sx={{ fontSize: 40, color: "red" }} /> },
    { title: "Burgers", icon: <FastfoodIcon sx={{ fontSize: 40, color: "orange" }} /> },
    { title: "Drinks", icon: <LocalDrinkIcon sx={{ fontSize: 40, color: "blue" }} /> },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "80vh",
          textAlign: "center",
          backgroundImage: "url('/images/banner2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: isSmall ? "2rem" : isMedium ? "3rem" : "4rem",
            color: "#fff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Welcome to FlavorNest
        </Typography>
        <Typography
          sx={{
            mt: 2,
            mb: 4,
            fontSize: isSmall ? "1rem" : "1.3rem",
            color: "#fff",
            textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          Delicious meals, delivered fresh to your door
        </Typography>
        <Button
          variant="contained"
          size={isSmall ? "small" : "medium"}
          sx={{ backgroundColor: "#4E6f3f", color: "#fff" }}
        >
          Order Now
        </Button>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography
          fontWeight="bold"
          mb={5}
          sx={{
            fontSize: isSmall ? "1.5rem" : "2rem",
          }}
        >
          Explore Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((cat, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 4,
                  borderRadius: 3,
                  boxShadow: 3,
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
                }}
              >
                {cat.icon}
                <Typography
                  mt={2}
                  sx={{
                    fontSize: isSmall ? "1rem" : "1.2rem",
                  }}
                >
                  {cat.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          p: 6,
          backgroundColor: "#ffcc70",
          borderRadius: 3,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{
            fontSize: isSmall ? "1.5rem" : "2rem",
          }}
        >
          Get 20% Off on Your First Order!
        </Typography>
        <Typography
          mt={1}
          mb={3}
          sx={{
            fontSize: isSmall ? "0.9rem" : "1.1rem",
          }}
        >
          Sign up today and enjoy exclusive discounts.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#fff",
            color: "red",
            fontSize: isSmall ? "0.8rem" : "1rem",
          }}
        >
          Sign Up Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
