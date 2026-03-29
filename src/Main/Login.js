import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../project_styles/donatepage.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

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
    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setErrorMsg(data.error || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setErrorMsg("Unable to connect to the server.");
    }
  };

  return (
    <div className="background-from-pages formpages" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="class1 col-md-6 col-12 p-5" style={{ borderRadius: "10px" }}>
        <h1 style={{ color: "white", fontSize: 40, textAlign: "center" }} className="pb-3">
          Login
        </h1>
        {errorMsg && <p style={{ color: "red", textAlign: "center" }}>{errorMsg}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="pb-3">
            <Form.Label style={{ color: "white" }}>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              required
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="pb-4">
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              required
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="text-center">
            <Button type="submit" variant="primary" size="lg" style={{ width: "100%" }}>
              Login
            </Button>
            <p style={{ color: "white", marginTop: "15px" }}>
              Don't have an account? <a href="/register" style={{ color: "#0d6efd" }}>Register here</a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
