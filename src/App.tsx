import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from "./routes/home/Home.tsx"
import Navigation from "./components/Navigation.tsx"
import CreateAccount from './routes/createaccount/CreateAccount.tsx'
import Login from './routes/login/Login.tsx'
import Profile from './routes/profile/Profile.tsx'
import Boards from "./routes/boards/Boards.tsx"

const AppLayout = () => {
  return (
  <>
    <Navigation />
    <Outlet />
  </>
)}


function App() {

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "boards",
        element: <Boards />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "createaccount",
        element: <CreateAccount />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  } 
])

//Need to move the nav into the router


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
