"use client";
import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const BannerOfferSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Box
      sx={{
        p: 6,
        backgroundColor: "#ffcc70",
        borderRadius: 0,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography fontWeight="bold" fontSize={isSmall ? "1.5rem" : "2rem"}>
        🎁 Enjoy 20% Off on Your First Order!
      </Typography>
      <Typography mt={1} mb={3} fontSize={isSmall ? "0.9rem" : "1.1rem"}>
        Delicious meals are just a click away.
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#fff",
          color: "#ff4d4d",
          fontSize: isSmall ? "0.8rem" : "1rem",
        }}
        onClick={() => router.push("/menu")}
      >
        Explore Menu
      </Button>
    </Box>
  );
};

export default BannerOfferSection;
