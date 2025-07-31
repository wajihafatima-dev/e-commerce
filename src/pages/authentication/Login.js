"use client";
import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      // Email localStorage me save
      localStorage.setItem("userEmail", data.email);

      alert("Login Successful!");
      router.push("/cart"); // Redirect to cart page
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3} color="#ff4d4d">
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2, backgroundColor: "#ff4d4d" }}
        onClick={handleLogin}
      >
        Login
      </Button>

      <Typography variant="body2" mt={2}>
        Don’t have an account?{" "}
        <span
          style={{ color: "#ff4d4d", cursor: "pointer" }}
          onClick={() => router.push("/signup")}
        >
          Sign up
        </span>
      </Typography>
    </Container>
  );
}
