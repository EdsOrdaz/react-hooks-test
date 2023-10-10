import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom"
import { MainApp } from './09-useContext/MainApp';
import { HomePage } from './09-useContext/HomePage';
import { LoginPage } from './09-useContext/LoginPage';
import { AboutPage } from './09-useContext/AboutPage';

// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'

// import './08-useReduce/intro-reducer';
// import { TodoApp } from './08-useReduce/TodoApp'
// import { MainApp } from './09-useContext/MainApp'
// import { HomePage } from './09-useContext/HomePage'
// import { AboutPage } from './09-useContext/AboutPage'
// import { LoginPage } from './09-useContext/LoginPage'


const getRoutes = () => createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      { path: "/", element: <HomePage />, },
      { path: "/login", element: <LoginPage />, },
      { path: "/about", element: <AboutPage />, },
    ],
  },
]);

const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <RouterProvider router={ router } />
  // </React.StrictMode>,
)
