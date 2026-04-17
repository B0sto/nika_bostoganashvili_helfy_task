import React, { useState } from 'react'
import { deleteTask } from '../services/taskService';
import "../styles/Modal.css"

const DeleteTaskModal = ({ task, onSuccess, closeModal }) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);

            await deleteTask(task.id);

            onSuccess(task.id);
            closeModal();
        } catch (error) {
            console.log("failed to delete task")
        }
    }
    return (
        <div>
            <h3 className='modalTitle'>Delete Task</h3>
            <p className='modalText'>Are you sure you want to delete "${task.title}?"</p>

            <div className="modalActions">
                <button className='modalBtn modalBtnSecondary' onClick={closeModal} disabled={loading}>
                    Cancel
                </button>

                <button className='modalBtn modalBtnDanger' onClick={handleDelete}>{loading ? "Deleting..." : "Delete"}</button>
            </div>
        </div>
    )
}

export default DeleteTaskModal