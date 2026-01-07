import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import {
  Calendar,
  User,
  LogOut,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { useState, useEffect } from "react";

export default function Header() {
  const { user, isAuthenticated, logout, openDashboard } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for dynamic navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className={`shadow-sm sticky-top transition-all ${
        scrolled ? "navbar-scrolled" : ""
      }`}
      style={{
        transition: "all 0.3s ease",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
      }}
    >
      <Container>
        {/* Logo/Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <div className="logo-container">
            <span className="logo-icon">🐾</span>
          </div>
          <div className="d-flex flex-column">
            <span className="brand-name">Bark N Boujee</span>
            <small className="brand-tagline">Luxury Pet Grooming</small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link-animated">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-animated">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/staff" className="nav-link-animated">
              Our Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/testimonials"
              className="nav-link-animated"
            >
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} to="/locations" className="nav-link-animated">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-animated">
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-2 align-items-center">
            <Button
              as={Link}
              to="/book"
              variant="primary"
              className="d-flex align-items-center gap-2 btn-book-animated"
            >
              <Calendar size={18} />
              <span>Book Now</span>
              <Sparkles size={16} className="sparkle-icon" />
            </Button>

            {isAuthenticated ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline-primary"
                  className="d-flex align-items-center gap-2 dropdown-animated"
                >
                  <div className="user-avatar">{user.firstName.charAt(0)}</div>
                  <span className="d-none d-md-inline">{user.firstName}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-animated">
                  <Dropdown.Item
                    onClick={openDashboard}
                    className="dropdown-item-animated"
                  >
                    <LayoutDashboard size={16} className="me-2" />
                    My Dashboard
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    onClick={logout}
                    className="dropdown-item-animated"
                  >
                    <LogOut size={16} className="me-2" />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                as={Link}
                to="/login"
                variant="outline-primary"
                className="d-flex align-items-center gap-2 btn-login-animated"
              >
                <User size={18} />
                <span>Login</span>
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
