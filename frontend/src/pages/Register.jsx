import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
    const [data, setData] = useState({
        name : '',
        email : '',
        password : ''
    })

    const registerUser = (e) => {
        e.preventDefault()

    }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center text-white">
        <div className="w-[400px] outline-none  bg-gray-500 flex justify-center items-center rounded-lg border-2 border-green-300 shadow-lg p-3">
            <form onSubmit={registerUser}>
                <div className="flex flex-col">
                <label className="font-bold text-xl text-green-300">Name</label>
                <input className="mt-2 bg-transparent border-2 outline-none border-green-200 w-full rounded-full px-2 py-1 " type="text" placeholder="Enter Your Name..." value={data.name} onChange={(e) => setData({...data, name: e.target.value })}/>
                </div>
                <div>
                <label className="font-bold text-xl text-green-300">Email</label>
                <input className="mt-2 bg-transparent border-2 outline-none border-green-200 w-full rounded-full px-2 py-1 " type="email" placeholder="Enter Your Email..." value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                </div>
                <div>
                <label className="font-bold text-xl text-green-300">Password</label>
                <input className="mt-2 bg-transparent border-2 outline-none border-green-200 w-full rounded-full px-2 py-1 " type="password" placeholder="Enter Your Password..." value={data.password} onChange={(e) => setData({...data, password: e.target.password})}/>
                </div>
                <div className="flex justify-center items-center mt-5 mb-3 w-full border-2 border-green-200 rounded-full bg-green-500 cursor-pointer hover:bg-green-700">
                    <button className="text-xl font-semibold" type="submit">Submit</button>
                </div>
                <div>
                <h3 className="text-green-300 flex gap-3">If Your email and password is exisit? <Link className="underline cursor-pointer  hover:text-green-500" to = "/login">Login</Link></h3>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register