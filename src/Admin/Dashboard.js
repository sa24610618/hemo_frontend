import React, { useState } from "react";
import "../project_styles/Admin-page.css";
import img1 from "../assets/img/bloodbank logo.png";
import "../assets/css/styles.css";
import "../assets/css/Advanced-NavBar---Multi-dropdown.css";
import "../assets/css/dh-row-text-image-right-responsive.css";
import "../assets/css/dh-row-text-image-right-responsive-1.css";
import "../assets/css/dh-card-image-left-dark.css";
import "../assets/css/Advanced-NavBar---Multi-dropdown.css";
import "../assets/css/4-Column-Team-Block---Circles.css";
import "../assets/css/Advanced-NavBar---Multi-dropdown.css";
import "../assets/css/Pretty-Footer-.css";
import "../assets/css/Pretty-Footer--1.css";
import "../assets/css/Image_center.css";
import "../assets/css/divider-text-middle.css";
import "../assets/css/Timeline---Gabriela-Carvalho.css";
import "../assets/css/Team-with-rotating-cards.css";
import "../assets/css/Team-with-rotating-cards-1.css";
import "../assets/css/Team-icons.css";
import "../assets/css/Swipe-Slider-6-styles.min.css";
import "../assets/css/Simple-Slider-Simple-Slider.css";
import "../assets/css/Projects-Grid-images.css";
import "../assets/css/Pretty-Registration-Form-.css";
import { Link } from "react-router-dom";
import AdminDonationPage from "./AdminDonationpage";
import AdminRequestPage from "./AdminRequestpage";
export default function Navbar() {
  const [toggle, setToggle] = useState(0);
  var [pagenum , setPageNum] = useState(0);

  function ToggleAction() {
    setToggle(!toggle);
  }
  function DonateFunc() {
    setPageNum(0);
    setToggle(!toggle);
  }

  function RequestFunc(){
    setPageNum(1);
    setToggle(!toggle);
  }

  function closewindow(){
    window.open("/", "_self");
  }
  return (
    <div className="admin-body">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <img
            src={img1}
            alt="Logo"
            className="d-inline-bloc align-text-top nav-logo-custom"
          />
          <button
            onClick={ToggleAction}
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggle
                ? "collpase navbar-collapse justify-content-end custom-nav-div bg-black"
                : "collapse navbar-collapse justify-content-end custom-nav-hide"
            }
            id="collapsibleNavbar"
          >
            <div className="navbar-nav nav-links-custom">
              <Link onClick={DonateFunc} className="nav-link active">
                Donate Data
              </Link>
              <Link
                onClick={RequestFunc}
                className="nav-link active"
              >
                Request Data
              </Link>
              <Link
                className="nav-link active"
                onClick={closewindow}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {pagenum === 0? <AdminDonationPage/> : <AdminRequestPage />}
    </div>
  );
}
