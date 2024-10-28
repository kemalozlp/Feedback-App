"use client";

import { useState } from "react";
import "./edit-feedback-button.css";
import { Less } from "@/helpers/icons";
import EditFeedbackForm from "../edit-feedback-modal";

export default function EditFeedbackButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="edit-button" onClick={openModal}>Edit Feedback</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="back-button" onClick={closeModal}>
              <Less />
              <p>Go Back</p>
            </button>

            <EditFeedbackForm />
          </div>
        </div>
      )}
    </div>
  );
}
