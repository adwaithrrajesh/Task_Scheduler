import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { updateTask } from "../API/taskAPI";
import toast from "react-hot-toast";
import axios from 'axios'

function EditTask() {
  const [taskDetails, setTaskDetails] = useState({});
  const [error, setError] = useState();
  const [defaultDate, setDefaultDate] = useState();
  const [image,setImage] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  useEffect(() => {
    setTaskDetails(data);
    const date = new Date(data.selectedDate);
    setDefaultDate(date);
  }, [data]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(null)
    if(!taskDetails.taskName){
      setError('Please Fill the task Name');
      return
    }
    if(!taskDetails.description){
      setError('Please add the Description');
      return
    }
    if(!taskDetails.priority){
      setError('Please select the priority')
      return
    }
    if(!taskDetails.selectedTime){
      setError('Please Select the Time')
      return
    }
    if(!defaultDate){
      setError('Please Enter the date')
    }else{
      taskDetails.selectedDate = defaultDate
    }

    if(image){
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "drcareStorage");
    const cloudinaryResponse = await axios.post("https://api.cloudinary.com/v1_1/dg047twga/image/upload",formData);
    const imageUrl = cloudinaryResponse.data.secure_url;
    taskDetails.imageUrl = imageUrl
    }

    toast.loading('Editing...')


    const response = await updateTask(taskDetails);
    toast.dismiss()
    if(response){
      toast.success("Data Updated Successfully")
      return navigate('/')
    }else{
      toast.error("Unable to update your data")
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => { setImage(event.target.result);};
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="my-1 px-1 w-full md:w-1/2 sm:w-1/2 lg:my-4 lg:px-4 lg:w-full">
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold mt-10">Edit Task</h2>
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
                src={image||taskDetails.imageUrl}
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
              value={taskDetails.taskName}
              style={{ outline: "none" }}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, taskName: e.target.value })
              }
            />
          </div>

          {/* Description Input */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <textarea
              rows="4"
              placeholder="Task Description"
              className="w-3/4 border border-gray-300 p-3 focus:border-blue-300"
              defaultValue={taskDetails.description}
              onChange={(e) =>setTaskDetails({ ...taskDetails, description: e.target.value })}
              style={{ outline: "none" }}
            />
          </div>

          {/* Priority */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <select
              id="priorityFilter"
              className="block w-3/4 mt-2 p-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:border-indigo-300"
              defaultValue={taskDetails.priority}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, priority: e.target.value })
              }
            >
              <option value="low">Low (priority)</option>
              <option value="medium">Medium (priority)</option>
              <option value="high">High (priority)</option>
            </select>
          </div>

          {/* Date Picker for Date */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <DatePicker
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              selected={defaultDate}
              onChange={(date) => setDefaultDate(date)}
              className="w-full p-2 border border-gray-300 rounded focus:border-blue-300 outline-none"
            />
          </div>

          {/* Date Picker for Time */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <input
              type="time"
              defaultValue={taskDetails.selectedTime}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, selectedTime: e.target.value })
              }
              className="w-1/4 p-2 border border-gray-300 rounded focus-border-blue-300 outline-none"
            />
          </div>

          {/* Add Task Button */}
          <div className="flex items-center justify-center leading-tight p-2 md-p-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Edit Task
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default EditTask;
