import React from "react";
import "../assets/css/aboutus.css";
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
export default function About() {
  return (
    <div className="Wholebody">
      <div className="desc">
        <div id="mid_left" className="">
          <div id="mid_title" className="col-12 col-6">
            ABOUT US
          </div>
          <p style={{ color: "black" }}>
            This Blood Bank is an initiative by a group of <strong>UOB HDIT</strong> students to provide the city with a solution for any issue related to Blood Donation/Acceptance. We aim at making this website reachable enough to anyone who's in need, instantly! UOB HDIT Blood Bank is committed to providing patients with an online portal where they can request blood or take an appointment if volunteering for blood donation!
          </p>
        </div>

        <div id="mid_slider" className="">
        </div>
        <br/>

        <div className="cleaner"></div>
      </div>

      <div className="desc-toolplate">
      <div className="desc-main-div">
            <h3>Donate</h3>
            <img
              src="https://www.nicepng.com/png/full/34-345932_donate-blood-red-blood-drop-donate-blood-logo.png"
              className="img1"
              alt="#"
            />
            <p> TEARS OF A MOTHER CAN'T SAVE HER CHILD. BUT YOU CAN </p>
          </div>

          <div className="desc-main-div">
            <h3>OUR SITE</h3>
            <img
              src="https://www.nicepng.com/png/full/366-3668293_blood-donation-app-png-blood-donation-logo.png"
              className="img1"
              alt="#"
            />
            <p>WE WILL CONNECT THE DONARS WITH YOU AT 0 COST</p>
          </div>

          <div className="desc-main-div">
            <h3>REQUEST</h3>
            <img
              src="https://globalbloodfund.org/wp-content/uploads/2020/06/GBF-icon-givetwice.png"
              className="img1"
              alt="Rosette"
            />
            <p>ASK THEM A LITTLE WHEN YOU WANT AND GIVE IT BACK </p>
          </div>
      </div>

      <div className="dev-box">
        <h1 className="ourteam">Our Team</h1>
        <div className="outer-dev-box">
          <div>
            <div className="box"></div>
            <div className="dev-name">
              <b> Yashwanth Amanapu</b>
              <br />
              Team Manager
            </div>
          </div>
          <div>
            <div className="box box-1"></div>
            <div className="dev-name">
              <b> Snehil Sah</b>
              <br />
              Team Member
            </div>
          </div>
          <div>
            <div className="box box-2"></div>
            <div className="dev-name">
              <b> Shashank Sahay</b>
              <br />
              Team Member
            </div>
          </div>
          <div>
            <div className="box box-6"></div>
            <div className="dev-name">
              <b> Akash Chowdary Kodali </b>
              <br />
              Team Member
            </div>
          </div>
          <div>
            <div className="box box-4"></div>
            <div className="dev-name">
              <b> P Sudheer Varma</b>
              <br />
              Team Member
            </div>
          </div>
          <div>
            <div className="box box-3"></div>
            <div className="dev-name">
              <b> S Harsha Kumar </b>
              <br />
              Team Member
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
    </div>
  );
}
