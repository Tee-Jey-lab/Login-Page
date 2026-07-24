import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center bg-gray-500 gap-3'>
        <div className="text-3xl font-bold">Welcome!</div>
        <div id="position" className="flex gap-5">
            <Link to={"/login"}>
                <button className="border rounded-xl bg-linear-to-r from-green-400 via-emerald-400 to-green-300 px-2 py-1 font-bold text-xl">Login</button>
            </Link>
            <Link to={"/register"}>
                <button className="border rounded-xl bg-linear-to-r from-purple-700 via-purple-400 to-indigo-300 px-2 py-1 font-bold text-xl">Sign In</button>
            </Link>
        </div>
    </main>
    
  )
}

export default HomePage