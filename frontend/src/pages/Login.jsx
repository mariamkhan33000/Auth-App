import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';


const Login = () => {
    const [data, setData] = useState({
        email : '',
        password: ''
    })

    const loginUser = (e) => {
        e.preventDefault()
        axios.get('/')
    }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center text-white">
        <div className="w-[400px] outline-none  bg-gray-500 flex justify-center items-center rounded-lg border-2 border-green-300 shadow-lg p-3">
            <form onSubmit={loginUser}>
                <div>
                <label className="font-bold text-xl text-green-300">Email</label>
                <input className="mt-2 bg-transparent border-2 outline-none border-green-200 w-full rounded-full px-2 py-1 " type="email" placeholder="Enter Your Email ..." value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                </div>
                <div>
                <label className="font-bold text-xl text-green-300">Password</label>
                <input className="mt-2 bg-transparent border-2 outline-none border-green-200 w-full rounded-full px-2 py-1 " type="password" placeholder="Enter Your Password ..." value={data.password} onChange={(e) => setData({...data, password: e.target.value })}/>
                </div>
                <div className="flex justify-center items-center mt-5 mb-3 w-full border-2 border-green-200 rounded-full bg-green-500 cursor-pointer hover:bg-green-700">
                    <button className="text-xl font-semibold" type="submit">Login</button>
                </div>
                <div>
                    <h3 className="text-green-300 flex gap-3">If email and password is not? <Link className="underline cursor-pointer  hover:text-green-500" to = "/register">Register</Link></h3>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
