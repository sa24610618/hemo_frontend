import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../project_styles/donatepage.css";
import Button from "react-bootstrap/Button";
import { add_to_request } from "../project_scripts/request_db";
export default function RequestNew() {
  return (
    <div className="">
      <div className="background-from-pages">
        <div className="class1 col-md-20 col-12 p-5">
          <h1 style={{ color: "white", fontSize: 50 }} className="pt-5">
            Request
          </h1>
          <br />
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="Patient_name"
                placeholder="Enter your Full Name"
                className="pb-2 "
              />
              <p id="patient_name_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Blood Group</Form.Label>
              <Form.Select id="PBlood_group_request" aria-label="BloodGroup">
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
              <p id="patient_blood_error"></p>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                id="patient_email"
                placeholder="Enter your Email"
                className="pb-2"
              />
              <p id="patient_email_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Phone number</Form.Label>
              <Form.Control
                type="number"
                id="patient_phone"
                placeholder="Enter Phone Number"
                className="pb-2"
              />
              <p id="patient_phone_error"></p>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Gender</Form.Label>
              <Form.Select id="PGender" aria-label="Gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <p id="patient_gender_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>Required Date</Form.Label>
              <Form.Control
                type="date"
                id="required_date"
                placeholder="Enter Required Date"
                className="pb-2"
              />
              <p id="patient_required_error"></p>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>AGE</Form.Label>
              <Form.Control
                type="email"
                id="patient_dob"
                placeholder="Enter your Age"
                className="pb-2"
              />
              <p id="patient_dob_error"></p>
            </Col>
            <Col className="col-md-6 col-12">
              <Form.Label style={{ color: "white" }}>
                No of Units required
              </Form.Label>
              <Form.Control
                type="number"
                id="no_of_units"
                placeholder="Enter No of Units Required"
                className="pb-2"
              />
              <p id="patient_units_error"></p>
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label style={{ color: "white" }}>Purpose</Form.Label>
            <Form.Control
              as="textarea"
              id="purpose_request"
              rows={3}
              placeholder="Enter Purpose"
            />
            <p id="patient_purpose_error"></p>
          </Row>
          <div>
            <center>
              <Button
                type="submit"
                id="submit_request"
                onClick={add_to_request}
              >
                Submit form
              </Button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
