/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../project_styles/Login.css";
import { login_page } from "../project_scripts/login_db";
import Dashboard from "./Dashboard";
import { Route,  Routes } from "react-router-dom";
import AdminDonationPage from "./AdminDonationpage";
import AdminRequestPage from "./AdminRequestpage";

export default function AdminLogin({ loggin_info }) {
  const [loggedIn, setLoggedin] = useState(false);
  async function adminLoad() {
    var res = await login_page();
    if (res) {
      setLoggedin(!loggedIn);
    }
  }

  // const Navigate = useNavigate();
  // function adminLoad(){
  //   var res = login_page();
  //   if (res){
  //     return Navigate("/dashboard");
  //   }
  // }

  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      // Optionally, show a message to the user indicating that the back button is disabled.
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
  return (
    <>
      {loggedIn ? (
        <>
          <Dashboard />
        </>
      ) : (
        <div className="adminloginbody">
          <div className="login-page">
            <div className="form">
              <div className="text">Login Form</div>
              <form className="login-form" action="">
                <input
                  id="login-id"
                  type="text"
                  placeholder="User Name"
                  required
                />
                <input
                  id="Login-Password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <br />
                <br />

                <button
                  id="login-button"
                  type="button"
                  className="btn"
                  onClick={adminLoad}
                >
                  <span>Login</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
