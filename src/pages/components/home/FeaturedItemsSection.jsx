"use client";
import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const featuredItems = [
  {
    name: "Cheesy Burger",
    image: "https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg",
    price: "$5.99",
  },
  {
    name: "Pepperoni Pizza",
    image: "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg",
    price: "$8.49",
  },
  {
    name: "Fresh Orange Juice",
    image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
    price: "$2.99",
  },
];

const FeaturedItemsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f7f7f7", textAlign: "center" }}>
      <Typography fontWeight="bold" mb={5} fontSize="2rem">
        ⭐ Featured Favorites
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {featuredItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                maxWidth: "300px",
                minWidth: "280px",
                mx: "auto",
                boxShadow: 2,
                "&:hover": {
                  transform: "scale(1.03)",
                  transition: "0.3s",
                },
              }}
            >
              <CardMedia component="img" height="300" image={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography color="text.secondary">{item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedItemsSection;
