import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authpage/Login";
import Register from "../Pages/Authpage/Register";
import Coverage from "../Pages/Coverage/Coverage";

const router = createBrowserRouter(
[
       {
    path:"/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:"coverage",
          Component:Coverage,
          loader:()=> fetch("./servicesCenter.json")
        }
    ]
   },
   {
    path:"/",
    Component:AuthLayout,
    children:[
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
    ]
   }
]
)

export default router