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
import { useAdminAuthStore } from "../../store/adminAuthStore";
import { mockAdminUsers } from "../../data/mockData";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAdminAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Find admin user
    const admin = mockAdminUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (admin) {
      login(admin);
      navigate("/admin/dashboard");
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
                  <h2 className="fw-bold mb-2">Staff Portal</h2>
                  <p className="text-muted">Bark N Boujee Administration</p>
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
                  <small className="d-block mb-1">
                    <strong>Admin:</strong> admin@barknboujee.com / admin123
                  </small>
                  <small className="d-block mb-1">
                    <strong>Groomer (Austin):</strong> austin@barknboujee.com /
                    groomer123
                  </small>
                  <small className="d-block">
                    <strong>Groomer (Ivan):</strong> ivan@barknboujee.com /
                    groomer123
                  </small>
                </div>

                <div className="text-center mt-4">
                  <small className="text-muted">
                    Customer? <Link to="/login">Customer Login</Link>
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
