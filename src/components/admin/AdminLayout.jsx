import { Outlet, Navigate, Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useAdminAuthStore } from "../../store/adminAuthStore";
import { LogOut, User, LayoutDashboard } from "lucide-react";

export default function AdminLayout() {
  const { admin, isAuthenticated, logout } = useAdminAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Admin Navbar */}
      <Navbar className="shadow-sm" style={{ backgroundColor: "#2b303a" }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/admin/dashboard" style={{ color: "#fff9fb" }}>
            <strong>Bark N Boujee</strong> <small style={{ color: "#61e294" }}>Staff Portal</small>
          </Navbar.Brand>

          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link 
              as={Link} 
              to="/admin/dashboard" 
              style={{ color: "#fff9fb" }}
              className="d-flex align-items-center"
            >
              <LayoutDashboard size={18} className="me-2" />
              Dashboard
            </Nav.Link>

            <Dropdown align="end">
              <Dropdown.Toggle 
                size="sm"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#61e294",
                  color: "#fff9fb"
                }}
              >
                <User size={16} className="me-2" />
                {admin.firstName}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ border: "2px solid #61e294" }}>
                <Dropdown.Header>
                  {admin.firstName} {admin.lastName}
                  <br />
                  <small className="text-muted">{admin.role}</small>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item 
                  onClick={handleLogout}
                  style={{ 
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(97, 226, 148, 0.1)";
                    e.target.style.color = "#0c7c59";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "inherit";
                  }}
                >
                  <LogOut size={16} className="me-2" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
}