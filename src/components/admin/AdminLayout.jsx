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
      <Navbar bg="dark" variant="dark" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand as={Link} to="/admin/dashboard">
            <strong>Bark N Boujee</strong> <small>Staff Portal</small>
          </Navbar.Brand>

          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link as={Link} to="/admin/dashboard" className="text-white">
              <LayoutDashboard size={18} className="me-2" />
              Dashboard
            </Nav.Link>

            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" size="sm">
                <User size={16} className="me-2" />
                {admin.firstName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>
                  {admin.firstName} {admin.lastName}
                  <br />
                  <small className="text-muted">{admin.role}</small>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
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
