import React, { useState } from "react";
import type { FormShape, Role } from "./Users";
import useUserStore from "./Users";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const addNewUser = useUserStore((state) => state.addUser);

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<Role | ''>('');
  const [isHidden, setIsHidden] = useState(true);

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!role) {
      alert("Role is Required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser: FormShape = {
      user_id: crypto.randomUUID(),
      userName: userName,
      email: email,
      password: password,
      role: role,
    };

    addNewUser(newUser);

    navigate("/login");
  };

  const inputDesign = 'outline-none w-full border-2 rounded-xl pl-1 py-1 text-lg font-medium';
  const li = 'text-xl font-bold px-2 py-1 hover:bg-emerald-700 rounded-xl cursor-pointer';

  return (
    <main className="w-full h-lvh overflow-auto bg-slate-900 place-items-center place-content-center">
      <form
        className="border-2 w-[45%] rounded-2xl p-2 grid gap-2.5 max-lg:w-[70%] max-sm:w-[90%] bg-linear-to-r from-blue-500 via-sky-400 to-sky-200"
        onSubmit={handleRegisterSubmit}
      >
        <h1 className="text-2xl font-bold">Sign Up</h1>

        <div id="register" className="flex flex-col gap-4">
          <label className="flex flex-col" htmlFor="userName">
            <span className="text-lg font-semibold">UserName</span>
            <input
              type="text"
              id="userName"
              className={inputDesign}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col" htmlFor="email">
            <span className="text-lg font-semibold">Email</span>
            <input
              type="email"
              id="email"
              className={inputDesign}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <ul
            className="relative text-lg font-bold cursor-pointer"
            onClick={() => setIsHidden(!isHidden)}
          >
            <div className="flex justify-between px-3">
              <span>{role ? role : 'Select Role'}</span>
              <img src="/dropdown.svg" alt="dropdown" width={20} height={20} />
            </div>

            <div
              className="absolute bg-sky-500 w-full rounded-2xl p-2 grid gap-2 z-10"
              hidden={isHidden}
            >
              <li className={li} onClick={() => setRole('Driver')}>Driver</li>
              <li className={li} onClick={() => setRole('User')}>User</li>
              <li className={li} onClick={() => setRole('Shipper')}>Shipper</li>
            </div>
          </ul>

          <label className="flex flex-col" htmlFor="password">
            <span className="text-lg font-semibold">Password</span>
            <input
              type="password"
              id="password"
              className={inputDesign}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col" htmlFor="confirmPassword">
            <span className="text-lg font-semibold">Confirm Password</span>
            <input
              type="password"
              id="confirmPassword"
              className={inputDesign}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[80%] border my-3 py-1 rounded-2xl font-bold text-lg bg-blue-700 hover:bg-blue-800 text-white cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default Register;