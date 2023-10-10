import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, MainApp } from "../09-useContext/index";
 

const getRoutes = () => createBrowserRouter(
    createRoutesFromElements(
        <Route
          element={<HomePage />}
          path="/"
        />
      )
);

  export default getRoutes;

  