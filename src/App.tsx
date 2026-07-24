import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import HomePage from "./Home"
import Register from "./Register"
import Dashboard from "./Dashboard"

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: "/login", element:<Login />},
  {path: "/register", element:<Register />},
  {path: "/dashboard/:id", element:<Dashboard />}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App