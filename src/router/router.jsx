import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authpage/Login";
import Register from "../Pages/Authpage/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PriviteRoutes from "../routes/PriviteRoutes";
import SendaPercel from "../Pages/SendaPercel/SendaPercel";
import BeRider from "../Pages/BeRider/BeRider";
import PricingCalculation from "../Pages/PricingCalulation/PricingCalculation";
import DashBoard from "../Layout/DashBoard";
import MyParcel from "../Pages/DashBoard/MyParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./servicesCenter.json"),
      },
      {
        path: "SendaPercel",
        element: (
          <PriviteRoutes>
            <SendaPercel></SendaPercel>
          </PriviteRoutes>
        ),
        loader: () => fetch("./servicesCenter.json"),
      },
      {
        path: "beRider",
        element: (
          <PriviteRoutes>
            <BeRider></BeRider>
          </PriviteRoutes>
        ),
      },
      {
        path: "pricing",
        element: (
          <PriviteRoutes>
            <PricingCalculation></PricingCalculation>
          </PriviteRoutes>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PriviteRoutes>
        <DashBoard></DashBoard>
      </PriviteRoutes>
    ),
    children:[
        {
            path:"/dashboard/myParcel",
            Component:MyParcel
        }
    ]
  },
]);

export default router;
