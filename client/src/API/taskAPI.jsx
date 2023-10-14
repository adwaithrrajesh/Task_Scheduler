import instance from "../Instance/instance"


export const addTask = async(value)=>{
    try {
        const response = await instance.post('/addTask',{value})
        return response 
    } catch (error) { 
        toast.error(error.response.data.message)
    }
}