"use client"

import { useState } from 'react';
import "./add-feedback-button.css"
import NewFeedbackForm from '../new-feedback-modal';
import { Less, Plus } from '@/helpers/icons';

export default function AddFeedbackButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button  className="add-feedback-button" onClick={openModal}><Plus /> Add Feedback</button>

            {isModalOpen && 
            (
              <div className="modal">
                <div className="modal-content">
                  <button className="back-button" onClick={closeModal}>
                    <Less />
                    Go Back 
                  </button>

                  <NewFeedbackForm />
                </div>
              </div>
            )}
        </div>
    )
}
