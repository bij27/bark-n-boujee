import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  ListGroup,
  Form,
  Alert,
  ButtonGroup,
} from "react-bootstrap";
import { useState } from "react";
import { useAdminAuthStore } from "../../store/adminAuthStore";
import { format, addMinutes } from "date-fns";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";

// Mock appointments with Cher included
const initialAppointments = [
  {
    id: "apt-today-1",
    customerId: "1",
    customerName: "Bijan Jadhavji",
    customerPhone: "(818) 963-3965",
    customerEmail: "12b.jad@gmail.com",
    petId: "1",
    petName: "Cher",
    petBreed: "German Shepherd Mix",
    petPhoto:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400",
    service: "Full Grooming Package",
    groomer: "Austin & Ivan",
    groomerId: "groomer-1",
    location: "Downtown Location",
    date: new Date().toISOString(),
    duration: 90,
    status: "in-progress",
    currentStage: 2, // Bath Time
    amount: 150.0,
    notes: "Scared of getting nails clipped! Take extra care.",
    checkInTime: new Date(Date.now() - 30 * 60000).toISOString(), // 30 min ago
    estimatedCompletion: addMinutes(new Date(), 60).toISOString(),
    messages: [
      {
        id: "msg-1",
        time: new Date(Date.now() - 25 * 60000).toISOString(),
        text: "Cher has been checked in! Starting her grooming session 🐾",
        sentBy: "groomer-1",
      },
    ],
  },
  {
    id: "apt-today-2",
    customerId: "2",
    customerName: "Sarah Martinez",
    customerPhone: "(312) 555-0123",
    customerEmail: "sarah.m@email.com",
    petId: "2",
    petName: "Buddy",
    petBreed: "Golden Retriever",
    petPhoto:
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400",
    service: "Full Grooming Package",
    groomer: "Austin & Ivan",
    groomerId: "groomer-1",
    location: "Downtown Location",
    date: new Date().toISOString(),
    duration: 90,
    status: "in-progress",
    currentStage: 3, // Grooming
    amount: 110.0,
    notes: "Very friendly, loves treats",
    checkInTime: new Date(Date.now() - 60 * 60000).toISOString(), // 1 hour ago
    estimatedCompletion: addMinutes(new Date(), 30).toISOString(),
    messages: [],
  },
  {
    id: "apt-today-3",
    customerId: "3",
    customerName: "Mike Thompson",
    customerPhone: "(312) 555-0456",
    customerEmail: "mike.t@email.com",
    petId: "3",
    petName: "Luna",
    petBreed: "Poodle",
    petPhoto:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
    service: "Bath & Brush",
    groomer: "Austin & Ivan",
    groomerId: "groomer-1",
    location: "Downtown Location",
    date: addMinutes(new Date(), 30).toISOString(),
    duration: 60,
    status: "upcoming",
    currentStage: 0,
    amount: 65.0,
    notes: "First time client",
    estimatedCompletion: null,
    messages: [],
  },
  {
    id: "apt-today-4",
    customerId: "4",
    customerName: "Jennifer Lopez",
    customerPhone: "(312) 555-0789",
    customerEmail: "jlo@email.com",
    petId: "4",
    petName: "Max",
    petBreed: "German Shepherd",
    petPhoto:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400",
    service: "Full Grooming Package",
    groomer: "Austin & Ivan",
    groomerId: "groomer-1",
    location: "Downtown Location",
    date: addMinutes(new Date(), 90).toISOString(),
    duration: 90,
    status: "upcoming",
    currentStage: 0,
    amount: 150.0,
    notes: "Large dog - needs extra time",
    estimatedCompletion: null,
    messages: [],
  },
];

const stages = [
  { id: 1, name: "Dropped Off", label: "Check In" },
  { id: 2, name: "Bath Time", label: "Bath" },
  { id: 3, name: "Grooming", label: "Grooming" },
  { id: 4, name: "Ready", label: "Ready" },
];

export default function AdminDashboard() {
  const { admin } = useAdminAuthStore();
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [editingETA, setEditingETA] = useState(null);
  const [etaMinutes, setEtaMinutes] = useState(30);

  // Filter appointments based on admin role
  const filteredAppointments = appointments.filter((apt) => {
    if (admin.role === "admin") return true;
    return apt.groomerId === admin.id;
  });

  const inProgressAppointments = filteredAppointments.filter(
    (apt) => apt.status === "in-progress"
  );
  const upcomingAppointments = filteredAppointments.filter(
    (apt) => apt.status === "upcoming"
  );

  const updateAppointmentStage = (appointmentId, newStage) => {
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === appointmentId ? { ...apt, currentStage: newStage } : apt
      )
    );

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Update selected appointment if it's the one being modified
    if (selectedAppointment?.id === appointmentId) {
      setSelectedAppointment((prev) => ({ ...prev, currentStage: newStage }));
    }
  };

  const checkInAppointment = (appointmentId) => {
    const duration =
      appointments.find((apt) => apt.id === appointmentId)?.duration || 90;

    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === appointmentId
          ? {
              ...apt,
              status: "in-progress",
              currentStage: 1,
              checkInTime: new Date().toISOString(),
              estimatedCompletion: addMinutes(
                new Date(),
                duration
              ).toISOString(),
            }
          : apt
      )
    );
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const updateETA = (appointmentId, minutes) => {
    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === appointmentId
          ? {
              ...apt,
              estimatedCompletion: addMinutes(
                new Date(),
                minutes
              ).toISOString(),
            }
          : apt
      )
    );

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setEditingETA(null);

    // Update selected appointment if it's the one being modified
    if (selectedAppointment?.id === appointmentId) {
      setSelectedAppointment((prev) => ({
        ...prev,
        estimatedCompletion: addMinutes(new Date(), minutes).toISOString(),
      }));
    }
  };

  const sendMessage = (appointmentId) => {
    if (!newMessage.trim()) return;

    const message = {
      id: `msg-${Date.now()}`,
      time: new Date().toISOString(),
      text: newMessage,
      sentBy: admin.id,
    };

    setAppointments((prev) =>
      prev.map((apt) =>
        apt.id === appointmentId
          ? { ...apt, messages: [...(apt.messages || []), message] }
          : apt
      )
    );

    setNewMessage("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Update selected appointment
    if (selectedAppointment?.id === appointmentId) {
      setSelectedAppointment((prev) => ({
        ...prev,
        messages: [...(prev.messages || []), message],
      }));
    }
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <Container fluid>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">Welcome, {admin.firstName}</h2>
            <p className="text-muted">
              {admin.role === "admin" ? "Administrator" : "Groomer"} •{" "}
              {admin.location}
            </p>
          </Col>
        </Row>

        {showSuccess && (
          <Alert
            variant="success"
            dismissible
            onClose={() => setShowSuccess(false)}
          >
            Update saved successfully! Customer has been notified.
          </Alert>
        )}

        {/* Stats */}
        <Row className="g-3 mb-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle p-3"
                    style={{ backgroundColor: "rgba(255, 202, 212, 0.2)" }}
                  >
                    <Calendar size={28} style={{ color: "#f4acb7" }} />
                  </div>
                  <div>
                    <h3 className="h2 fw-bold mb-0">
                      {filteredAppointments.length}
                    </h3>
                    <small className="text-muted">Today's Appointments</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle p-3"
                    style={{ backgroundColor: "rgba(157, 129, 137, 0.2)" }}
                  >
                    <Clock size={28} style={{ color: "#9d8189" }} />
                  </div>
                  <div>
                    <h3 className="h2 fw-bold mb-0">
                      {inProgressAppointments.length}
                    </h3>
                    <small className="text-muted">Currently Here</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle p-3"
                    style={{ backgroundColor: "rgba(216, 226, 220, 0.4)" }}
                  >
                    <Calendar size={28} style={{ color: "#9d8189" }} />
                  </div>
                  <div>
                    <h3 className="h2 fw-bold mb-0">
                      {upcomingAppointments.length}
                    </h3>
                    <small className="text-muted">Upcoming Today</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Currently Here - Left Side */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 py-3">
                <h5 className="mb-0">
                  Currently Here ({inProgressAppointments.length})
                </h5>
              </Card.Header>
              <Card.Body className="p-0">
                {inProgressAppointments.length > 0 ? (
                  inProgressAppointments.map((apt) => (
                    <Card key={apt.id} className="border-0 border-bottom">
                      <Card.Body>
                        {/* Pet Info */}
                        <Row className="mb-3">
                          <Col md={4}>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                src={apt.petPhoto}
                                alt={apt.petName}
                                className="rounded-circle"
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  objectFit: "cover",
                                }}
                              />
                              <div>
                                <h5 className="mb-1">{apt.petName}</h5>
                                <small className="text-muted d-block">
                                  {apt.petBreed}
                                </small>
                                <small className="text-muted">
                                  {apt.customerName}
                                </small>
                              </div>
                            </div>
                          </Col>

                          <Col md={8}>
                            {apt.notes && (
                              <Alert
                                variant="warning"
                                className="small mb-2 py-2"
                              >
                                <strong>Note:</strong> {apt.notes}
                              </Alert>
                            )}
                            <div className="d-flex gap-2 small">
                              <div>
                                <User size={14} className="me-1" />
                                {apt.customerPhone}
                              </div>
                              <div>
                                <MapPin size={14} className="me-1" />
                                {apt.service}
                              </div>
                            </div>
                          </Col>
                        </Row>

                        {/* Stage Toggle Buttons */}
                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <strong className="small">Grooming Status:</strong>
                            <Badge bg="primary">
                              Stage {apt.currentStage}/4
                            </Badge>
                          </div>
                          <ButtonGroup className="w-100">
                            {stages.map((stage) => (
                              <Button
                                key={stage.id}
                                variant={
                                  apt.currentStage >= stage.id
                                    ? "primary"
                                    : "outline-secondary"
                                }
                                onClick={() =>
                                  updateAppointmentStage(apt.id, stage.id)
                                }
                                className="d-flex flex-column align-items-center py-2"
                              >
                                <small className="fw-bold">{stage.label}</small>
                                {apt.currentStage === stage.id && (
                                  <small
                                    className="text-white"
                                    style={{ fontSize: "0.7rem" }}
                                  >
                                    Current
                                  </small>
                                )}
                                {apt.currentStage > stage.id && (
                                  <small
                                    className="text-white"
                                    style={{ fontSize: "0.7rem" }}
                                  >
                                    ✓
                                  </small>
                                )}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </div>

                        {/* ETA Section */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <Clock size={16} className="me-2" />
                            <small className="text-muted">
                              Est. Completion:
                            </small>
                            {apt.estimatedCompletion ? (
                              <strong className="ms-2">
                                {format(
                                  new Date(apt.estimatedCompletion),
                                  "h:mm a"
                                )}
                              </strong>
                            ) : (
                              <strong className="ms-2 text-muted">
                                Not set
                              </strong>
                            )}
                          </div>
                          {editingETA === apt.id ? (
                            <div className="d-flex gap-2 align-items-center">
                              <Form.Control
                                type="number"
                                size="sm"
                                style={{ width: "80px" }}
                                value={etaMinutes}
                                onChange={(e) => setEtaMinutes(e.target.value)}
                                min="5"
                                max="180"
                              />
                              <small className="text-muted">min</small>
                              <Button
                                size="sm"
                                variant="success"
                                onClick={() =>
                                  updateETA(apt.id, parseInt(etaMinutes))
                                }
                              >
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="outline-secondary"
                                onClick={() => setEditingETA(null)}
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline-primary"
                              onClick={() => {
                                setEditingETA(apt.id);
                                setEtaMinutes(30);
                              }}
                            >
                              Update ETA
                            </Button>
                          )}
                        </div>

                        {/* Quick Message */}
                        <div className="mt-3">
                          <Button
                            size="sm"
                            variant="outline-primary"
                            className="w-100"
                            onClick={() => setSelectedAppointment(apt)}
                          >
                            <MessageSquare size={16} className="me-2" />
                            Send Update to Customer
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <Card.Body className="text-center py-5">
                    <p className="text-muted mb-0">
                      No pets currently being groomed
                    </p>
                  </Card.Body>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Right Side - Upcoming & Messages */}
          <Col lg={5}>
            {/* Upcoming Appointments */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 py-3">
                <h5 className="mb-0">
                  Upcoming Today ({upcomingAppointments.length})
                </h5>
              </Card.Header>
              <ListGroup variant="flush">
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.map((apt) => (
                    <ListGroup.Item key={apt.id} className="py-3">
                      <div className="d-flex gap-3 align-items-center">
                        <img
                          src={apt.petPhoto}
                          alt={apt.petName}
                          className="rounded-circle"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1">{apt.petName}</h6>
                          <small className="text-muted d-block">
                            {apt.customerName}
                          </small>
                          <small className="text-muted">{apt.service}</small>
                          <div className="mt-1">
                            <Badge bg="secondary">
                              {format(new Date(apt.date), "h:mm a")}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => checkInAppointment(apt.id)}
                        >
                          Check In
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item className="text-center py-4 text-muted">
                    No upcoming appointments today
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>

            {/* Message Customer */}
            {selectedAppointment && (
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      <MessageSquare size={18} className="me-2" />
                      Message {selectedAppointment.customerName}
                    </h6>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => setSelectedAppointment(null)}
                    >
                      Close
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {selectedAppointment.messages &&
                  selectedAppointment.messages.length > 0 ? (
                    selectedAppointment.messages.map((msg) => (
                      <div key={msg.id} className="mb-3 p-3 bg-light rounded">
                        <small className="text-muted d-block mb-1">
                          {format(new Date(msg.time), "h:mm a")}
                        </small>
                        <p className="mb-0">{msg.text}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted text-center">
                      No messages sent yet
                    </p>
                  )}
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage(selectedAppointment.id);
                    }}
                  >
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <Button type="submit" variant="primary">
                        <Send size={18} />
                      </Button>
                    </div>
                    <small className="text-muted d-block mt-2">
                      Customer will receive this as a text message
                    </small>
                  </Form>
                </Card.Footer>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
