import Hero from "../components/home/Hero.jsx";
import ServicesPreview from "../components/home/ServicesPreview.jsx";
import TestimonialsPreview from "../components/home/TestimonialsPreview.jsx";
import CallToAction from "../components/home/CallToAction.jsx";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ListGroup,
  Alert,
} from "react-bootstrap";
import { useAuthStore } from "../store/authStore";
import { mockAppointments, mockPets, mockRewards } from "../data/mockData";
import { format } from "date-fns";
import { Calendar, Gift, Heart, Award, MapPin, Clock } from "lucide-react";
import PetTracker from "../components/dashboard/PetTracker";

export default function Home() {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    // Get the first pet (Cher)
    const userPet = mockPets[0];

    // Create in-progress appointment with REAL pet name
    const inProgressAppointment = {
      id: "apt-today",
      petName: userPet.name, // Uses Cher's name now!
      service: "Full Grooming Package",
      groomer: "Austin & Ivan",
      location: "Downtown Location",
      status: "in-progress",
      currentStage: 3,
    };

    const upcomingAppointments = mockAppointments
      .filter((apt) => apt.status === "upcoming")
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);

    const recentAppointments = mockAppointments
      .filter((apt) => apt.status === "completed")
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Get vaccine status with proper labels
    const getVaccineStatus = (vaccine) => {
      if (vaccine.status === "current")
        return { variant: "success", text: "Current ✓" };
      if (vaccine.status === "expiring_soon")
        return { variant: "warning", text: "Expiring Soon" };
      return { variant: "danger", text: "Expired" };
    };

    return (
      <div className="bg-light py-5">
        <Container>
          {/* Welcome Header */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">
              Welcome back, {user.firstName}!
            </h1>
            <p className="lead text-muted">
              Here's what's happening with your furry friends
            </p>
          </div>

          <Row className="g-4">
            {/* Left Column - Main Dashboard */}
            <Col lg={8}>
              {/* Pet Tracker */}
              <PetTracker appointment={inProgressAppointment} />

              {/* Quick Stats */}
              <Row className="g-3 mb-4">
                <Col md={4}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div
                        style={{ backgroundColor: "rgba(255, 202, 212, 0.2)" }}
                        className="rounded-circle d-inline-flex p-3 mb-2"
                      >
                        <Gift size={32} style={{ color: "#f4acb7" }} />
                      </div>
                      <h3 className="h2 fw-bold mb-0">
                        {mockRewards.points.toLocaleString()}
                      </h3>
                      <small className="text-muted">Reward Points</small>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div
                        style={{ backgroundColor: "rgba(157, 129, 137, 0.2)" }}
                        className="rounded-circle d-inline-flex p-3 mb-2"
                      >
                        <Calendar size={32} style={{ color: "#9d8189" }} />
                      </div>
                      <h3 className="h2 fw-bold mb-0">
                        {upcomingAppointments.length}
                      </h3>
                      <small className="text-muted">Upcoming Visits</small>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div
                        style={{ backgroundColor: "rgba(216, 226, 220, 0.4)" }}
                        className="rounded-circle d-inline-flex p-3 mb-2"
                      >
                        <Heart size={32} style={{ color: "#9d8189" }} />
                      </div>
                      <h3 className="h2 fw-bold mb-0">{mockPets.length}</h3>
                      <small className="text-muted">Furry Friends</small>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Rewards Tier Progress */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Award size={24} style={{ color: "#f4acb7" }} />
                      <h5 className="mb-0">
                        Rewards Tier:{" "}
                        <Badge
                          style={{ backgroundColor: "#cd7f32", color: "#fff" }}
                        >
                          BRONZE
                        </Badge>
                      </h5>
                    </div>
                    <Button size="sm" variant="outline-primary">
                      View Rewards
                    </Button>
                  </div>

                  <div className="mb-2">
                    <div className="d-flex justify-content-between small mb-1">
                      <span>{mockRewards.points.toLocaleString()} points</span>
                      <span>
                        {mockRewards.tierProgress.nextTier.toLocaleString()}{" "}
                        points to Silver
                      </span>
                    </div>
                    <div
                      className="progress"
                      style={{ height: "10px", backgroundColor: "#d8e2dc" }}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${
                            (mockRewards.points /
                              mockRewards.tierProgress.nextTier) *
                            100
                          }%`,
                          backgroundColor: "#ffcad4",
                        }}
                      ></div>
                    </div>
                  </div>

                  <small className="text-muted">
                    You're{" "}
                    {(
                      mockRewards.tierProgress.nextTier - mockRewards.points
                    ).toLocaleString()}{" "}
                    points away from Silver tier!
                  </small>
                </Card.Body>
              </Card>

              {/* Upcoming Appointments */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">
                      <Calendar size={20} className="me-2" />
                      Upcoming Appointments
                    </h5>
                    <Button size="sm" variant="primary">
                      Book New
                    </Button>
                  </div>
                </Card.Header>
                <ListGroup variant="flush">
                  {upcomingAppointments.length > 0 ? (
                    upcomingAppointments.map((apt) => (
                      <ListGroup.Item key={apt.id} className="py-3">
                        <Row className="align-items-center">
                          <Col md={8}>
                            <h6 className="mb-1">{apt.service}</h6>
                            <small className="text-muted">
                              {apt.petName} • {apt.groomer} • {apt.location}
                            </small>
                          </Col>
                          <Col md={4} className="text-md-end">
                            <div className="fw-semibold">
                              {format(new Date(apt.date), "MMM dd, yyyy")}
                            </div>
                            <small className="text-muted">
                              {format(new Date(apt.date), "h:mm a")}
                            </small>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item className="text-center py-4">
                      <p className="text-muted mb-2">
                        No upcoming appointments
                      </p>
                      <Button size="sm" variant="primary">
                        Book Your First Visit
                      </Button>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card>

              {/* Recent Appointments */}
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Recent Visits</h5>
                    <Button size="sm" variant="outline-primary">
                      View All
                    </Button>
                  </div>
                </Card.Header>
                <ListGroup variant="flush">
                  {recentAppointments.map((apt) => (
                    <ListGroup.Item key={apt.id} className="py-3">
                      <Row className="align-items-center">
                        <Col md={8}>
                          <h6 className="mb-1">{apt.service}</h6>
                          <small className="text-muted">
                            {apt.petName} • {apt.groomer}
                          </small>
                        </Col>
                        <Col md={4} className="text-md-end">
                          <div className="fw-semibold">
                            {format(new Date(apt.date), "MMM dd, yyyy")}
                          </div>
                          <Badge bg="success" className="mt-1">
                            Completed
                          </Badge>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>

            {/* Right Column - Sidebar */}
            <Col lg={4}>
              {/* Quick Actions */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-0 py-3">
                  <h5 className="mb-0">Quick Actions</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-grid gap-2">
                    <Button variant="primary">
                      <Calendar size={18} className="me-2" />
                      Book Appointment
                    </Button>
                    <Button variant="outline-primary">
                      <Gift size={18} className="me-2" />
                      Redeem Rewards
                    </Button>
                    <Button variant="outline-primary">
                      <Award size={18} className="me-2" />
                      Leave a Review
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* My Pets */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header className="bg-white border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">My Pets</h5>
                    <Button size="sm" variant="outline-primary">
                      Manage
                    </Button>
                  </div>
                </Card.Header>
                <ListGroup variant="flush">
                  {mockPets.map((pet) => (
                    <ListGroup.Item key={pet.id} className="py-3">
                      <div className="d-flex gap-3">
                        <img
                          src={pet.photo}
                          alt={pet.name}
                          className="rounded-circle"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6 className="mb-1">{pet.name}</h6>
                          <small className="text-muted d-block">
                            {pet.breed}
                          </small>
                          <small className="text-muted">
                            {pet.age} years old • {pet.weight} lbs
                          </small>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>

              {/* Vaccine Status */}
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-0 py-3">
                  <h5 className="mb-0"> Vaccine Status</h5>
                </Card.Header>
                <Card.Body>
                  {mockPets.map((pet) => (
                    <div key={pet.id}>
                      <h6 className="mb-3">{pet.name}'s Vaccines</h6>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small">Rabies</span>
                          <Badge
                            bg={
                              getVaccineStatus(pet.vaccineStatus.rabies).variant
                            }
                          >
                            {getVaccineStatus(pet.vaccineStatus.rabies).text}
                          </Badge>
                        </div>
                        <small className="text-muted">
                          Expires:{" "}
                          {format(
                            new Date(pet.vaccineStatus.rabies.expiresAt),
                            "MMM dd, yyyy"
                          )}
                        </small>

                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <span className="small">Bordetella</span>
                          <Badge
                            bg={
                              getVaccineStatus(pet.vaccineStatus.bordetella)
                                .variant
                            }
                          >
                            {
                              getVaccineStatus(pet.vaccineStatus.bordetella)
                                .text
                            }
                          </Badge>
                        </div>
                        <small className="text-muted">
                          Expires:{" "}
                          {format(
                            new Date(pet.vaccineStatus.bordetella.expiresAt),
                            "MMM dd, yyyy"
                          )}
                        </small>

                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <span className="small">DHPP</span>
                          <Badge
                            bg={
                              getVaccineStatus(pet.vaccineStatus.dhpp).variant
                            }
                          >
                            {getVaccineStatus(pet.vaccineStatus.dhpp).text}
                          </Badge>
                        </div>
                        <small className="text-muted">
                          Expires:{" "}
                          {format(
                            new Date(pet.vaccineStatus.dhpp.expiresAt),
                            "MMM dd, yyyy"
                          )}
                        </small>
                      </div>

                      {pet.notes && (
                        <Alert variant="info" className="mt-3 small mb-0">
                          <strong>Note:</strong> {pet.notes}
                        </Alert>
                      )}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  // If user is NOT logged in, show marketing homepage
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <TestimonialsPreview />
      <CallToAction />
    </div>
  );
}
