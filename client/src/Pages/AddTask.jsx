import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { addTask } from "../API/taskAPI";

const AddTask = () => {
  const [image, setImage] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime,setSelectedTime] = useState('')
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("Please upload an image for the task.");
      return;
    }

    if (!taskName || !selectedDate) {
      setError("Task name and date are required fields.");
      return;
    }


    if(!selectedTime){
      setError('Please select the time')
      return
    }

    if (!description) {
      setError("Please Add Description");
      return;
    }
    setError(null);

    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("upload_preset", "drcareStorage");
    // const cloudinaryResponse = await axios.post("https://api.cloudinary.com/v1_1/dg047twga/image/upload",formData);
    // const imageUrl = cloudinaryResponse.data.secure_url;
    const imageUrl = "https://res.cloudinary.com/dg047twga/image/upload/v1697285386/ap5ci7ghhr2ra6iyibrw.jpg";

    const task = { imageUrl, taskName, description, selectedDate,selectedTime };

    const response = await addTask(task)

    console.log(response)



  };

  return (
    <div className="my-1 px-1 w-full md:w-1/2 sm:w-1/2 lg:my-4 lg:px-4 lg:w-full">
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold mt-10">Add Task</h2>
      </div>

      <article className="overflow-hidden rounded-lg mt-10 shadow-lg bg-gray-100 h-[auto] relative">
        <form>
          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center py-2">{error}</div>
          )}

          {/* Image Upload */}
          <div className="flex items-center justify-center flex-col leading-tight p-2 md-p-4">
            <label htmlFor="image-upload" className="cursor-pointer">
              <img
                alt="Placeholder"
                className="block h-48 w-48 object-cover rounded-full"
                src={
                  image ||
                  "https://th.bing.com/th/id/OIP.3IiQVTvBHyL1eAyj4eP8UAHaGD?pid=ImgDet&w=721&h=590&rs=1"
                }
              />
            </label>

            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <label
              htmlFor="image-upload"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2 cursor-pointer"
            >
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <i className="fas fa-upload mr-2" /> Add Image
            </label>
          </div>

          {/* Task Name */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <input
              type="text"
              placeholder="Task Name"
              className="border-b-2 border-gray-300 w-3/4 py-3 text-xl focus:border-blue-300"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              style={{ outline: "none" }}
            />
          </div>

          {/* Description Input */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <textarea
              rows="4"
              placeholder="Task Description"
              className="w-3/4 border border-gray-300 p-3 focus:border-blue-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ outline: "none" }}
            />
          </div>

          {/* Date Picker for Date */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-300 outline-none"
            />
          </div>

          {/* Date Picker for Time */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <input
              type="time"
              value={selectedTime} 
              onChange={(e) => setSelectedTime(e.target.value)} 
              className="w-1/4 p-2 border border-gray-300 rounded focus-border-blue-300 outline-none"
            />
          </div>

          {/* Add Task Button */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Task
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default AddTask;
