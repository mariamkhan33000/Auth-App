import { Link } from "react-router-dom"


const Navabar = () => {
  return (
    <div className="bg-slate-600 w-full h-10 flex justify-between items-center">
        <h1 className="text-green-400 ml-5 cursor-pointer">Auth App</h1>
    <div>
    <nav className="flex gap-3 mr-3 position-fix">
      <Link className="text-green-400 ml-5 cursor-pointer hover:text-green-600 duration-100 hover:text-xl" to= "/">Home</Link>
      <Link className="text-green-400 ml-5 cursor-pointer hover:text-green-600 duration-100 hover:text-xl" to= "/register">Register</Link>
      <Link className="text-green-400 ml-5 cursor-pointer hover:text-green-600 duration-100 hover:text-xl" to= "/login">Login</Link>
    </nav>
    </div>
    </div>
  )
}

export default Navabar
