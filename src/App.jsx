import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import { Routes,Route } from 'react-router-dom'
import Book from './Components/Book'
import Dashboard from './Components/Dashboard'
import Userlogin from './Components/Userlogin'


function App() {


  return (
    <>
    <div className="text-white bg-[#242424] h-auto w-[100%]">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/contact' element={<Home/>} />
        <Route path='/register' element={<Book/>} />
        <Route path='/login' element={<Userlogin/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
