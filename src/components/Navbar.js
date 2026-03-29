import React, { useState } from "react";
import "./Navbar.css";
import img1 from "../assets/img/bloodbank logo.png";
// import { Link } from "react-router-dom";
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
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function ToggleAction() {
    setToggle(!toggle);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black">
        <div className="container-fluid">
          <Link to="/">
          <img
            src={img1}
            alt="Logo"
            className="d-inline-bloc align-text-top nav-logo-custom"
          />
          </Link>
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
              <Link onClick={ToggleAction} className="nav-link active" to="/">
                Home
              </Link>
              <Link
                onClick={ToggleAction}
                className="nav-link active"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={ToggleAction}
                className="nav-link active"
                to="/donate"
              >
                Donate
              </Link>
              <Link
                onClick={ToggleAction}
                className="nav-link active"
                to="/request"
              >
                Request
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
