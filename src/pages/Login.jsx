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
        background:
          "linear-gradient(135deg, rgba(97, 226, 148, 0.15) 0%, rgba(12, 124, 89, 0.1) 100%)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-2" style={{ color: "#2b303a" }}>
                    Welcome Back
                  </h2>
                  <p className="text-primary">Sign in to access your account</p>
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
                    <Form.Label style={{ color: "#2b303a" }}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        borderColor: "rgba(97, 226, 148, 0.3)",
                        fontSize: "16px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#2b303a" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{
                        borderColor: "rgba(97, 226, 148, 0.3)",
                        fontSize: "16px",
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-100 mb-3"
                    style={{
                      backgroundColor: "#0c7c59",
                      borderColor: "#0c7c59",
                      color: "#fff9fb",
                      fontWeight: "600",
                    }}
                  >
                    Sign In
                  </Button>
                </Form>

                <hr style={{ borderColor: "rgba(97, 226, 148, 0.2)" }} />

                <div className="text-center">
                  <small className="text-primary d-block mb-2">
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
                  <small className="text-primary">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      style={{ color: "#0c7c59", fontWeight: "600" }}
                    >
                      Sign up
                    </Link>
                  </small>
                </div>

                <div className="text-center mt-3">
                  <small className="text-primary">
                    Staff member?{" "}
                    <Link
                      to="/admin/login"
                      style={{ color: "#0c7c59", fontWeight: "600" }}
                    >
                      Admin Login
                    </Link>
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
