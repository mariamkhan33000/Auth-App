import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navabar from './components/Navabar'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <div>
      <Navabar/>
      <Toaster position='top-right' toastOptions={{duration: 15000}}/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
