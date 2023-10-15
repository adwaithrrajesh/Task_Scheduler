import React, { useEffect, useState } from 'react'
import Modal from "react-modal";


function TaskModal({task}) {

    const [selectedTask,setSelectedTask] = useState(null)

    useEffect(() => {
        setSelectedTask(task)
    }, [task])



    // Function to close the modal
    const closeTaskModal = () => {
        setSelectedTask(null);
      };


    return (
      <Modal
      isOpen={selectedTask !== null}
      onRequestClose={closeTaskModal}
      contentLabel="Task Details"
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"> {/* Adjusted max-w-lg */}
        <img
        src={selectedTask?.imageUrl}
          alt="Task Image"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-2">
          {selectedTask?.taskName} ({selectedTask?.description})
        </h2>
        <p className="text-sm text-gray-600 text-center mb-2">
          Date:  {new Date(selectedTask?.selectedDate).toDateString()}
        </p>
        <p className="text-sm text-gray-600 text-center mb-4">
          Time: {selectedTask?.selectedTime}
        </p>
        <p className="text-sm text-gray-600 text-center mb-4">
          Proiority: {selectedTask?.priority}
        </p>
        <p className="text-base text-gray-800 mb-4">
          {selectedTask?.description}
        </p>
        <button
          onClick={closeTaskModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full"
        >
          Close
        </button>
      </div>
    </Modal>
    
  )
}

export default TaskModal