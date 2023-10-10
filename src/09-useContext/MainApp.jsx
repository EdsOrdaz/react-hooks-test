import { Link, Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/userProvider"
// import { HomePage } from "./HomePage"
export const MainApp = () => {
  return (
      <UserProvider>
            <NavBar />
            <hr />

          <Outlet />
      </UserProvider>
  )
}
