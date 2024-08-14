import React from 'react';

export default function ConfirmModal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm} className="button">Yes</button>
                    <button onClick={onCancel} className="button">No</button>
                </div>
            </div>
        </div>
    );
}