"use client";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useState } from "react";

export default function header() {
  const [cartCount] = useState(3); // Example static count

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        color: "#000",
        py: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ff4d4d",
            cursor: "pointer",
            "&:hover": { color: "#e64444" },
          }}
        >
          FlavorNest
        </Typography>

        {/* Menu Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} href="/" sx={{ color: "#000", fontWeight: "500", "&:hover": { color: "#ff4d4d" } }}>
            Home
          </Button>
          <Button component={Link} href="/menu" sx={{ color: "#000", fontWeight: "500", "&:hover": { color: "#ff4d4d" } }}>
            Menu
          </Button>
          <Button component={Link} href="/order" sx={{ color: "#000", fontWeight: "500", "&:hover": { color: "#ff4d4d" } }}>
            My Orders
          </Button>
        </Box>

        {/* Cart */}
        <IconButton component={Link} href="/cart" sx={{ color: "#ff4d4d" }}>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
