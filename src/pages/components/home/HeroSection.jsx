import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from 'react'

const HeroSection = () => {
    const theme = useTheme();
      const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
        <Box
            sx={{
                height: "90vh",
                minHeight: "100%",
                textAlign: "center",
                backgroundImage: "url('/images/banner2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
                color: "#fff",
            }}
        >
            <Typography
                fontWeight="bold"
                sx={{
                    fontSize: isSmall ? "2rem" : isMedium ? "3rem" : "4rem",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                }}
            >
                Welcome to FlavorNest
            </Typography>
            <Typography
                sx={{
                    mt: 2,
                    mb: 4,
                    fontSize: isSmall ? "1rem" : "1.3rem",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                }}
            >
                Delicious meals, delivered fresh to your door
            </Typography>
            <Button
                variant="contained"
                size={isSmall ? "small" : "medium"}
                sx={{ backgroundColor: "#ff4d4d", color: "#fff" }}
            >
                Order Now
            </Button>
        </Box>
    )
}

export default HeroSection
