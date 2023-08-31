import React from "react";
import { Modal, Button } from "@mui/material";
import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Modal open={isOpen} onClose={onCancel}>
      <div className="delete-modal">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this product?</p>
        <Button variant="contained" onClick={onConfirm}>
          Delete
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
