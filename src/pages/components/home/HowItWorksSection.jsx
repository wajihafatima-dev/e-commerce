"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const steps = [
  "Browse our delicious menu",
  "Add your favorites to the cart",
  "Place order and enjoy at home",
];

const HowItWorksSection = () => {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fff6e5", textAlign: "center" }}>
      <Typography fontWeight="bold" fontSize="2rem" mb={4}>
        🧾 How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Box
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: 2,
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ color: "#ff4d4d" }}>
                Step {i + 1}
              </Typography>
              <Typography mt={1}>{step}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
