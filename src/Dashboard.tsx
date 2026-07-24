import { useNavigate } from "react-router-dom";
import useUserStore from "./Users";

const Dashboard = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!currentUser) {
    return (
      <div className="p-6">
        <h2>You are not logged in.</h2>
        <button onClick={() => navigate("/login")} className="text-sky-500">Go to Login</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1>Welcome back, {currentUser.userName}!</h1>
      <p>Role: {currentUser.role}</p>

      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-xl cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;