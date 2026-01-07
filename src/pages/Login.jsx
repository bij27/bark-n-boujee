import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { mockUser } from "../data/mockData";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Check if credentials match the mock user
    if (email === mockUser.email && password === "password123") {
      login(mockUser);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #d8e2dc 0%, #f0f8f5 100%)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-2">Welcome Back</h2>
                  <p className="text-muted">Sign in to access your account</p>
                </div>

                {error && (
                  <Alert
                    variant="danger"
                    dismissible
                    onClose={() => setError("")}
                  >
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-100 mb-3"
                  >
                    Sign In
                  </Button>
                </Form>

                <hr />

                <div className="text-center">
                  <small className="text-muted d-block mb-2">
                    Demo Credentials:
                  </small>
                  <small className="d-block">
                    <strong>Email:</strong> {mockUser.email}
                  </small>
                  <small className="d-block">
                    <strong>Password:</strong> password123
                  </small>
                </div>

                <div className="text-center mt-4">
                  <small className="text-muted">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </small>
                </div>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Staff member? <Link to="/admin/login">Admin Login</Link>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
