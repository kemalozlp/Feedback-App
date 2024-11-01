"use client"

import { useState } from 'react';
import "./add-feedback-button.css"
import NewFeedbackForm from '../new-feedback-modal';
import { LessIcon, PlusIcon } from '@/helpers/icons';

export default function AddFeedbackButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button  className="add-feedback-button" onClick={openModal}><PlusIcon /> Add Feedback</button>

            {isModalOpen && 
            (
              <div className="modal">
                <div className="modal-content">
                  <button className="back-button" onClick={closeModal}>
                    <LessIcon />
                    Go Back 
                  </button>

                  <NewFeedbackForm />
                </div>
              </div>
            )}
        </div>
    )
}
