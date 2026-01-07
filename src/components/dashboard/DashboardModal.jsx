import { Modal, Nav, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Heart, 
  Settings, 
  Gift,
  X,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { mockAppointments, mockPets, mockRewards } from '../../data/mockData';
import { format } from 'date-fns';
import PetTracker from './PetTracker';

export default function DashboardModal() {
  const { showDashboard, closeDashboard, user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');

  const inProgressAppointment = {
    id: 'apt-today',
    petName: 'Bella',
    service: 'Full Grooming Package',
    groomer: 'Jessica Smith',
    location: 'Downtown Location',
    status: 'in-progress',
    currentStage: 3,
  };

  const upcomingAppointments = mockAppointments
    .filter(apt => apt.status === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <Modal 
      show={showDashboard} 
      onHide={closeDashboard}
      size="lg"
      centered
      scrollable
    >
      <Modal.Header className="border-0 pb-0">
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="mb-0">Welcome, {user.firstName}! </h4>
              <small className="text-muted">{user.email}</small>
            </div>
            <Button variant="link" onClick={closeDashboard} className="text-muted">
              <X size={24} />
            </Button>
          </div>

          {/* Tab Navigation */}
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'overview'} 
                onClick={() => setActiveTab('overview')}
                className="d-flex align-items-center gap-2"
                style={activeTab === 'overview' ? {borderBottomColor: '#ffcad4', color: '#f4acb7'} : {}}
              >
                <LayoutDashboard size={16} />
                Overview
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'appointments'} 
                onClick={() => setActiveTab('appointments')}
                className="d-flex align-items-center gap-2"
                style={activeTab === 'appointments' ? {borderBottomColor: '#ffcad4', color: '#f4acb7'} : {}}
              >
                <Calendar size={16} />
                Appointments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'pets'} 
                onClick={() => setActiveTab('pets')}
                className="d-flex align-items-center gap-2"
                style={activeTab === 'pets' ? {borderBottomColor: '#ffcad4', color: '#f4acb7'} : {}}
              >
                <Heart size={16} />
                My Pets
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'settings'} 
                onClick={() => setActiveTab('settings')}
                className="d-flex align-items-center gap-2"
                style={activeTab === 'settings' ? {borderBottomColor: '#ffcad4', color: '#f4acb7'} : {}}
              >
                <Settings size={16} />
                Settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Modal.Header>

      <Modal.Body className="pt-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <PetTracker appointment={inProgressAppointment} />

            {/* Quick Stats */}
            <div className="row g-3 mb-4">
              <div className="col-6">
                <Card className="border-0 h-100" style={{backgroundColor: 'rgba(255, 202, 212, 0.1)'}}>
                  <Card.Body className="text-center">
                    <Gift size={32} style={{color: '#f4acb7'}} className="mb-2" />
                    <h3 className="mb-0">{mockRewards.points.toLocaleString()}</h3>
                    <small className="text-muted">Reward Points</small>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6">
                <Card className="border-0 h-100" style={{backgroundColor: 'rgba(216, 226, 220, 0.3)'}}>
                  <Card.Body className="text-center">
                    <Calendar size={32} style={{color: '#9d8189'}} className="mb-2" />
                    <h3 className="mb-0">{upcomingAppointments.length}</h3>
                    <small className="text-muted">Upcoming Visits</small>
                  </Card.Body>
                </Card>
              </div>
            </div>

            {/* Rewards Tier */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="mb-0">Rewards Status</h6>
                  <Badge style={{backgroundColor: '#9d8189', color: '#fff'}}>GOLD</Badge>
                </div>
                <div className="progress mb-2" style={{height: '10px', backgroundColor: '#d8e2dc'}}>
                  <div 
                    className="progress-bar" 
                    style={{width: '83%', backgroundColor: '#ffcad4'}}
                  ></div>
                </div>
                <small className="text-muted">
                  500 points to Platinum tier
                </small>
              </Card.Body>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0">
                <h6 className="mb-0">Upcoming Appointments</h6>
              </Card.Header>
              <ListGroup variant="flush">
                {upcomingAppointments.map((apt) => (
                  <ListGroup.Item key={apt.id}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong className="d-block">{apt.service}</strong>
                        <small className="text-muted">
                          {apt.petName} • {apt.groomer}
                        </small>
                      </div>
                      <div className="text-end">
                        <small className="d-block">{format(new Date(apt.date), 'MMM dd')}</small>
                        <small className="text-muted">{format(new Date(apt.date), 'h:mm a')}</small>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div>
            <h5 className="mb-3">Your Appointments</h5>
            
            {inProgressAppointment && (
              <div className="mb-4">
                <h6 className="text-muted mb-3">Currently in Progress</h6>
                <Card className="shadow-sm" style={{borderColor: '#ffcad4', borderWidth: '2px'}}>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 className="mb-1">{inProgressAppointment.service}</h5>
                        <p className="text-muted mb-2">{inProgressAppointment.petName}</p>
                        <div className="d-flex gap-3 small">
                          <span>
                            <MapPin size={14} className="me-1" />
                            {inProgressAppointment.location}
                          </span>
                          <span>
                            <Clock size={14} className="me-1" />
                            2:00 PM - 3:30 PM
                          </span>
                        </div>
                      </div>
                      <Badge className="px-3 py-2" style={{backgroundColor: '#ffcad4', color: '#000'}}>
                        In Progress
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline-primary"
                      onClick={() => setActiveTab('overview')}
                    >
                      View Live Tracker
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            )}

            <h6 className="text-muted mb-3">Upcoming</h6>
            {upcomingAppointments.map((apt) => (
              <Card key={apt.id} className="border-0 shadow-sm mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{apt.service}</h6>
                      <p className="text-muted small mb-2">{apt.petName} with {apt.groomer}</p>
                      <div className="d-flex gap-3 small text-muted">
                        <span>
                          <MapPin size={14} className="me-1" />
                          {apt.location}
                        </span>
                        <span>
                          <Clock size={14} className="me-1" />
                          {format(new Date(apt.date), 'h:mm a')}
                        </span>
                      </div>
                    </div>
                    <div className="text-end">
                      <div className="fw-semibold">{format(new Date(apt.date), 'MMM dd')}</div>
                      <Button size="sm" variant="outline-danger" className="mt-2">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

        {/* Pets Tab */}
        {activeTab === 'pets' && (
          <div>
            <h5 className="mb-3">My Pets</h5>
            {mockPets.map((pet) => (
              <Card key={pet.id} className="border-0 shadow-sm mb-3">
                <Card.Body>
                  <div className="d-flex gap-3">
                    <img
                      src={pet.photo}
                      alt={pet.name}
                      className="rounded-circle"
                      style={{width: '80px', height: '80px', objectFit: 'cover'}}
                    />
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{pet.name}</h5>
                      <p className="text-muted small mb-2">
                        {pet.breed} • {pet.age} years old • {pet.weight} lbs
                      </p>
                      
                      {/* Vaccine Status */}
                      <div className="d-flex gap-2 flex-wrap">
                        <Badge bg="success">Rabies ✓</Badge>
                        <Badge bg="success">Bordetella ✓</Badge>
                        <Badge bg="warning" text="dark">DHPP Expiring Soon</Badge>
                      </div>
                      
                      <p className="small text-muted mt-2 mb-0">{pet.notes}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
            <Button variant="outline-primary" className="w-100">
              + Add New Pet
            </Button>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h5 className="mb-4">Account Settings</h5>
            
            <Card className="border-0 shadow-sm mb-3">
              <Card.Body>
                <h6 className="mb-3">Personal Information</h6>
                <div className="mb-2">
                  <small className="text-muted d-block">Name</small>
                  <div>{user.firstName} {user.lastName}</div>
                </div>
                <div className="mb-2">
                  <small className="text-muted d-block">Email</small>
                  <div>{user.email}</div>
                </div>
                <div className="mb-3">
                  <small className="text-muted d-block">Phone</small>
                  <div>{user.phone}</div>
                </div>
                <Button size="sm" variant="outline-primary">Edit Profile</Button>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm mb-3">
              <Card.Body>
                <h6 className="mb-3">Notifications</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" defaultChecked id="notif1" />
                  <label className="form-check-label" htmlFor="notif1">
                    Appointment reminders
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" defaultChecked id="notif2" />
                  <label className="form-check-label" htmlFor="notif2">
                    Vaccine expiration alerts
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" defaultChecked id="notif3" />
                  <label className="form-check-label" htmlFor="notif3">
                    Rewards & promotions
                  </label>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h6 className="mb-3">Preferences</h6>
                <div className="mb-3">
                  <label className="form-label small text-muted">Preferred Location</label>
                  <select className="form-select">
                    <option>Downtown Location</option>
                    <option>North Side Location</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label small text-muted">Reminder Method</label>
                  <select className="form-select">
                    <option>Text & Email</option>
                    <option>Text Only</option>
                    <option>Email Only</option>
                    <option>Phone Call</option>
                  </select>
                </div>
                <Button size="sm" variant="primary">Save Changes</Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="border-0" style={{backgroundColor: 'rgba(216, 226, 220, 0.3)'}}>
        <Button variant="outline-secondary" onClick={closeDashboard}>
          Close
        </Button>
        <Button variant="primary" onClick={closeDashboard}>
          Book Appointment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}