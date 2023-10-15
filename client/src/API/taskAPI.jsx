import instance from "../Instance/instance"
import toast from "react-hot-toast"


export const addTask = async(value)=>{
    try {
        const response = await instance.post('/addTask',{value})
        return response 
    } catch (error) { 
        toast.error(error.response.data.message)
    }
}

export const getTasksFromServer = async(value)=>{
    try {
        const response = await instance.get('/getTask')
        return response 
    } catch (error) { 
        toast.error(error.response.data.message)
    }
}

export const deleteTask = async(taskId) =>{
    try {
        const response = await instance.delete('/deleteTask',{data: { taskId: taskId }})
        return response 
    } catch (error) { 
        toast.error(error.response.data.message)
    }
}

export const updateTask = async(taskDetails) =>{
    try {
        const response = await instance.patch('/updateTask',{taskDetails})
        return response
    } catch (error) {
        toast.error(error.response.data.message)
    }
}