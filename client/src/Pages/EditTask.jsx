import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";

const EditTask = () => {

  const [image, setImage] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());



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

  const handleAddTask = () => {
    // Handle the task addition logic here
    console.log("Image:", image);
    console.log("Task Name:", taskName);
    console.log("Description:", description);
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="my-1 px-1 w-full  md:w-1/2 sm:w-1/2 lg:my-4 lg:px-4 lg:w-full">
 <div className="flex flex-col items-center justify-center mt-10">
<h2 className="text-3xl font-bold mt-10">Edit Task</h2>
 </div>
 
      <article className="overflow-hidden rounded-lg mt-10 shadow-lg bg-gray-100 h-[auto] relative">
        <form>
          {/* Image Upload */}
          <div className="flex items-center justify-center flex-col leading-tight p-2 md:p-4">
            <label htmlFor="image-upload" className="cursor-pointer">
              <img
                alt="Placeholder"
                className="block h-48 w-48 object-cover"
                src={
                  image ||
                  "https://cdn3.iconfinder.com/data/icons/basicolor-file-types/24/147_png_transparent_image-4096.png"
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
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="h:mm aa"
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-300 outline-none"
            />
          </div>

          {/* Add Task Button */}
          <div className="flex items-center justify-center leading-tight p-2 md:p-4">
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

export default EditTask;
