import { useState } from "react";
import useUserStore from "./Users";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const login = useUserStore((state) => state.login);
    const navigate = useNavigate();

    const [ email, setEmail] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleLoginSubmit =(e: React.FormEvent) => {
        e.preventDefault();
        const success = login(email, password);

        if (success) {
        navigate("/dashboard");
        } else {
        alert("Invalid email or password!");
        }
    };

    return (<main className="w-full h-dvh overflow-auto bg-slate-900 place-items-center place-content-center">
        <form className="border-2 w-[35%] rounded-2xl p-2 grid gap-2.5 max-lg:w-[70%] max-sm:w-[90%] bg-linear-to-r from-blue-500 via-sky-400 to-sky-200" 
            onSubmit={handleLoginSubmit}>
            <h1 className="font-bold text-2xl p-3 text-slate-900">LOG-IN</h1>
            <div id="input" className="grid p-4 gap-4 text-xl font-medium">
                <input type="email" id="email" 
                    className="border-b outline-none px-1 bg-transparent" placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input type="password" name="password" id="password" 
                    className="border-b outline-none px-1" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="flex justify-between p-1.5">
                <label htmlFor="checkbox" className="flex gap-x-2">
                    <input type="checkbox" id="checkbox" />
                    <span>Remember me</span>
                </label>

                <span onClick={() => {
                    alert("Fuck Off! I haven't designed a forgot password page.")
                }} className="hover:text-blue-600 hover:underline text-lg font-medium">Forgot password?</span>
            </div>

            <button type="submit" className="w-full bg-mist-950 hover:bg-mist-900 p-2 text-xl font-semibold text-[#ffffffa4] rounded-2xl">LOGIN</button>

            <h3 className="text-center">Don't have an account? <span onClick={() => {
                navigate("/register")
            }} className="hover:text-blue-600 hover:underline text-lg font-medium">Register</span></h3>
        </form>
    </main>)
}

export default Login;