import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Calendar, User, LogOut, Home, Sparkles } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { useState, useEffect } from "react";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className={`shadow-sm sticky-top transition-all ${
        scrolled ? "navbar-scrolled" : ""
      }`}
      style={{
        backgroundColor: "#2b303A !important",
        transition: "all 0.3s ease",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
        zIndex: 1030,
      }}
    >
      <Container style={{ position: "relative" }}>
        {/* Logo/Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img
            src="/images/Bark_N_Boujee_pic.png"
            alt="Bark N Boujee"
            style={{
              height: "60px",
              width: "auto",
            }}
          />
          <div className="d-none d-lg-flex flex-column">
            <span
              style={{
                color: "#2b303A",
                fontSize: "1.5rem",
                fontWeight: "400",
                letterSpacing: "0.15em",
                lineHeight: "1",
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                textTransform: "uppercase",
              }}
            >
              BARK N BOUJEE
            </span>
            <small
              style={{
                color: "#2b303A",
                fontSize: "0.65rem",
                fontWeight: "400",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "0.25rem",
                fontFamily: "'Arial', 'Helvetica', sans-serif",
              }}
            >
              LUXURY GROOMING
            </small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "#2b303A" }}
        >
          <span
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23fff9fb' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
            }}
            className="navbar-toggler-icon"
          ></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gallery"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/staff"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/testimonials"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/locations"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Locations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link-animated"
              style={{ color: "#2b303A" }}
            >
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-2 align-items-center">
            <Button
              as={Link}
              to="/book"
              className="d-flex align-items-center gap-2 btn-book-animated"
            >
              <Calendar size={18} />
              <span>Book Now</span>
              <Sparkles size={16} className="sparkle-icon" />
            </Button>

            {isAuthenticated ? (
              <Dropdown align="end" style={{ position: "static" }}>
                <Dropdown.Toggle
                  className="d-flex align-items-center gap-2 dropdown-animated"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#fff9fb",
                    color: "#fff9fb",
                  }}
                >
                  <div
                    className="user-avatar"
                    style={{
                      backgroundColor: "#e6d18c",
                      color: "#2b303a",
                    }}
                  >
                    {user.firstName.charAt(0)}
                  </div>
                  <span className="d-none d-md-inline">{user.firstName}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-animated">
                  <Dropdown.Header>
                    {user.firstName} {user.lastName}
                    <br />
                    <small className="text-muted">{user.email}</small>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item as={Link} to="/">
                    <Home size={16} className="me-2" />
                    My Dashboard
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>
                    <LogOut size={16} className="me-2" />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                as={Link}
                to="/login"
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
