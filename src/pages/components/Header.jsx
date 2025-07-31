"use client";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const [cartCount] = useState(3); // Example static count
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Menu", href: "/menu" },
    { text: "My Orders", href: "/order" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          color: "#000",
          py: {xs:1,sm:0.5},
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

          {/* Desktop Menu */}
          {!isSmallScreen && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.text}
                  component={Link}
                  href={link.href}
                  sx={{ color: "#000", fontWeight: 400, "&:hover": { color: "#ff4d4d" } }}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Small Screen Menu Icon */}
          <Box>
          {isSmallScreen && (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#ff4d4d" }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Cart */}
          <IconButton component={Link} href="/cart" sx={{ color: "#ff4d4d" }}>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text} component={Link} href={link.href}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
