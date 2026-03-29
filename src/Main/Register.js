import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../project_styles/donatepage.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    blood_group: "",
    city: "",
    role: "donor"
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMsg("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrorMsg(data.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Unable to connect to the server.");
    }
  };

  return (
    <div className="background-from-pages formpages">
      <div className="class1 col-md-20 col-12 p-5" style={{ minHeight: "80vh" }}>
        <h1 style={{ color: "white", fontSize: 50 }} className="pt-5">
          Register
        </h1>
        <br />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: "lightgreen" }}>{successMsg}</p>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="col-md-6 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="full_name"
                required
                placeholder="Enter your Full Name"
                value={formData.full_name}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-6 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                required
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                required
                placeholder="Enter a strong Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-6 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>Phone</Form.Label>
              <Form.Control
                type="text"
                id="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col className="col-md-4 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>Blood Group</Form.Label>
              <Form.Select id="blood_group" value={formData.blood_group} onChange={handleChange}>
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
            </Col>
            <Col className="col-md-4 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>City</Form.Label>
              <Form.Control
                type="text"
                id="city"
                placeholder="Enter your City"
                value={formData.city}
                onChange={handleChange}
              />
            </Col>
            <Col className="col-md-4 col-12 pb-3">
              <Form.Label style={{ color: "white" }}>Role</Form.Label>
              <Form.Select id="role" value={formData.role} onChange={handleChange}>
                <option value="donor">Donor</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </Form.Select>
            </Col>
          </Row>
          <br />
          <div>
            <center>
              <Button type="submit" variant="primary">
                Register
              </Button>
            </center>
          </div>
        </Form>
      </div>
      <br />
    </div>
  );
}
