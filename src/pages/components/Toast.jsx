"use client";
import { Snackbar, Alert, Typography } from "@mui/material";
import React from "react";

export default function Toast({
  open,
  onClose,
  message,
  severity = "success",
  duration = 4000,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} 
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "100%",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          "& .MuiAlert-icon": { fontSize: "20px" },
        }}
      >
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: 500 }}>
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
}
