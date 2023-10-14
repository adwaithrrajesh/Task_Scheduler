import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from './Pages/ViewTask'
import AddTask from './Pages/AddTask'
import EditTask from './Pages/EditTask'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Task/>}/>
      <Route path='/addTask' element={<AddTask/>}/>
      <Route path='/editTask' element={<EditTask/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
