import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './cmt/Root/Root.jsx';
import Home from './cmt/Home/Home.jsx';
import Mbls from './cmt/Mbls/Mbls.jsx';
import User from './usr/User.jsx';
import Users2 from './usr/Users2.jsx';
import Userdtl from './usr/Userdtl.jsx';
const pms = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children: [
{index: true, Component: Home},
{path: "mbls", Component: Mbls},
{path: "users" ,
  loader: () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
  },
 Component: User,
},
{
  path: "users2",
 element:<Suspense fallback={<h1>Loading...</h1>}>
 <Users2 pms={pms}></Users2>
 </Suspense>,

},
{
  path:"users/:usersId",
  loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),

  Component: Userdtl
},
{
  path: "*",
  element: <div style={{textAlign: 'center', fontSize: '30px', color: 'red'}}>404 Not Found</div>
}




   ]


  },
  {
    path: "/a",
    element: <div>aaa</div>
  },
  {
    path: "/App",
    element: <App />
  },
  {
    path: "/app",
   Component: App
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
