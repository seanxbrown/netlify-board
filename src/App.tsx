import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from "./routes/home/Home.tsx"
import Navigation from "./components/Navigation.tsx"
import CreateAccount from './routes/createaccount/CreateAccount.tsx'
import CreateBoard from './routes/createboard/CreateBoard.tsx'
import Login from './routes/login/Login.tsx'
import MyBoards from './routes/myboards/MyBoards.tsx'
import Profile from './routes/profile/Profile.tsx'

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
        path: "createboard",
        element: <CreateBoard />
      },
      {
        path: "myboards",
        element: <MyBoards />
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
