"use client";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { useRouter } from "next/router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function OrderPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            p: 5,
            textAlign: "center",
            borderRadius: 3,
            backgroundColor: "#fff",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: 60, color: "#4caf50", mb: 2 }}
          />
          <Typography
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              mb: 2,
              fontSize: {
                xs: "1.5rem", // mobile
                sm: "2rem",   // small screens
                md: "2.5rem", // medium screens
                lg: "3rem",   // large screens
              },
            }}
          >
            Order Placed Successfully!
          </Typography>
          <Typography sx={{ mb: 4, color: "#555" }}>
            Thank you for choosing <strong>FlavorNest</strong>. Your delicious
            order will be delivered soon. Sit back and relax!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ff4d4d",
              px: 5,
              "&:hover": { backgroundColor: "#e64444" },
            }}
            onClick={() => router.push("/")}
          >
            Go to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
