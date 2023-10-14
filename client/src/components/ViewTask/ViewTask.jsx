import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskModal from "./Modal";

function ViewTask() {
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);


  const navigate = useNavigate()
  // Sample tasks data
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      priority: "low",
      date: "1/2/4",
      time: "10 am",
      description: "Description for Task 1",
    },
    {
      id: 2,
      name: "Task 2",
      priority: "high",
      date: "1/3/4",
      time: "11 am",
      description: "Description for Task 2",
    },
    {
      id: 3,
      name: "Task 3",
      priority: "medium",
      date: "1/4/4",
      time: "12 pm",
      description: "Description for Task 3",
    }
  ];

  const filteredTasks = tasks.filter((task) => {
    if (selectedPriority === "all" || task.priority === selectedPriority) {
      return true;
    }
    return false;
  });


    // Function to open the modal and set the selected task
    const openTaskModal = (task) => {
      setSelectedTask(task);
    };



  return (
    <>

    {
      tasks.length> 0 ?

      <>
      <div className="flex justify-end p-4 absolute top-0 right-5">
      <div className="mt-10 mr-4">
    <button className="bg-blue-500 text-white py-1 px-6 rounded" onClick={()=>navigate('/addTask')}>
        Add Task
      </button>
      </div>


      <div className="relative p-4 border rounded-lg bg-white">
        <label htmlFor="priorityFilter" className="text-gray-600">
          Filter by Priority:
        </label>
        <select
          id="priorityFilter"
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="block w-full mt-2 p-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:border-indigo-300"
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>


    

    <div className="mt-36">

      {filteredTasks.map((task) => (
        <div
        key={task.id}
        className="my-1 px-1 md:w-1/2 sm:w-1/2 lg:my-4 lg:px-4 lg:w-full cursor-pointer hover:scale-95 duration-200"
        onClick={() => openTaskModal(task)}
        >
          <article className="overflow-hidden rounded-lg shadow-lg bg-white h-[auto] relative">
            {/* Edit Icon */}
            <button onClick={()=>navigate('/editTask')}>
              <i className="fas fa-edit absolute top-2 right-10 text-blue-500 cursor-pointer"></i>
            </button>
            {/* Delete Icon */}
            <button>
              <i className="fas fa-trash-alt absolute top-2 right-20 text-red-500 cursor-pointer"></i>
            </button>

            <div className="flex items-center justify-center leading-tight p-2 md:p-4">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-48 w-48 object-cover"
                  src="https://cdn-icons-png.flaticon.com/512/2665/2665038.png"
                />
              </a>
            </div>
            <header className="flex items-center justify-center leading-tight">
              <h1 className="text-lg">
                <p className="no-underline text-black">
                  {task.name} ({task.priority})
                </p>
              </h1>
            </header>
            <div className="flex items-center justify-center text-gray-700 text-center leading-tight p-2 md:p-4">
              <p>Date: {task.date}</p>
            </div>
            <div className="flex items-center justify-center text-gray-700 text-center leading-tight p-2 md:p-2">
              <p>Time: {task.time}</p>
            </div>
            <div className="flex items-center justify-center text-gray-800 text-center leading-tight p-2 md:p-4">
              <p>{task.description}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
    </>
    
    :
<>
   
<body class="bg-gray-100">
  <div class="flex h-screen items-center justify-center">
    <div class="text-center p-28 bg-white rounded shadow-lg">
      <h1 class="text-2xl text-gray-700 mb-4">No Tasks Found</h1>
      <button className="bg-blue-500 text-white py-1 px-6 rounded" onClick={()=>navigate('/addTask')}>
        Add Task
      </button>
    </div>
  </div>
</body>
  </>
    }

    {selectedTask && <TaskModal task={selectedTask}/>}

    </>
  );
}

export default ViewTask;
