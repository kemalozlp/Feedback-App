"use client";

import { useState } from "react";
import "./edit-feedback-button.css";
import { LessIcon } from "@/helpers/icons";
import EditFeedbackForm from "../edit-feedback-modal";

export default function EditFeedbackButton({feedbackData, id}) {
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
              <LessIcon />
              <p>Go Back</p>
            </button>

            <EditFeedbackForm feedbackData={feedbackData} id={id} />
          </div>
        </div>
      )}
    </div>
  );
}
