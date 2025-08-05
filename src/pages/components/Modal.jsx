// components/ConfirmModal.jsx
"use client";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function Modal({ open, handleClose, onConfirm, title, message,btntext }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title || "Confirm Action"}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {message || "Are you sure you want to proceed?"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleClose();
            onConfirm?.(); // callback function
          }}
          variant="contained"
          sx={{
            backgroundColor: "#ff4d4d",
            "&:hover": { backgroundColor: "#e64444" },
          }}
        >
          {btntext}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
