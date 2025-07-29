"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function OrderPage() {
  const router = useRouter();

  return (
    <Box sx={{ background: "#f7f5f2", minHeight: "100vh", py: 5 }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#ff4d4d" }}>
          🎉 Order Placed Successfully!
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Thank you for choosing FlavorNest. Your delicious order will be delivered soon.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#ff4d4d",
            "&:hover": { backgroundColor: "#e64444" },
          }}
          onClick={() => router.push("/")}
        >
          Go to Home
        </Button>
      </Container>
    </Box>
  );
}
