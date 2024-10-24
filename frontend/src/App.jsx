import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navabar from './components/Navabar'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Navabar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
