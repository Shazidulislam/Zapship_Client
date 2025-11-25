import React from "react";
import { Link, Outlet } from "react-router";
import ProFastButton from "../Components/Button/ProFastButton";
import authImg from "../assets/potho/authImage.png";
const AuthLayout = () => {
  return (
    <div>
      <div className=" p-20 bg-base-200 min-h-screen">
        <Link to={"/"}>
          <ProFastButton />
        </Link>
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1">
            <img src={authImg} className="max-w-sm rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
