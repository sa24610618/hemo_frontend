import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../project_styles/donatepage.css";
import Button from "react-bootstrap/Button";
import { add_to_donation } from "../project_scripts/donation_db";

export default function DonateNew() {
  return (
    <>
      <div className="background-from-pages formpages">
        <div className="class1 col-md-20 col-12 p-5">
          <h1 style={{ color: "white", fontSize: 50 }} className="pt-5">
            Donate
          </h1>
          <br />
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="Donatorname"
                placeholder="Enter your Full Name"
                className="pb-2"
              />
              <p id="donator_name_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Blood Group</Form.Label>
              <Form.Select aria-label="BloodGroup" id="Blood_group">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Form.Select>
              <p id="donator_blood_error"></p>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                id="Donator_email"
                placeholder="Enter your Email"
                className="pb-2"
              />
              <p id="donator_email_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Gender</Form.Label>
              <Form.Select aria-label="Gender" id="Gender">
                <option value = "">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Other</option>
              </Form.Select>
              <p id="donator_gender_error"></p>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Phone number</Form.Label>
              <Form.Control
                type="number"
                id="Donator_phone"
                placeholder="Enter Phone Number"
                className="pb-2"
              />
              <p id="donator_phone_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                id="Donator_dob"
                placeholder="Enter Date of Birth"
                className="pb-2"
              />
              <p id="donator_dob_error"></p>
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label style={{ color: "white" }}>Address</Form.Label>
            <Form.Control as="textarea" rows={3} id="Donator_address" />
            <p id="donator_address_error"></p>
          </Row>
          <div>
            <center>
              <Button
                type="submit"
                onClick={add_to_donation}
              >
                Submit form
              </Button>
            </center>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
