import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Calendar, Award, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Content */}
          <Col lg={6}>
            <h1 className="display-3 fw-bold mb-4">
              Professional Dog Grooming with a
              <span style={{color: '#f4acb7'}}> Personal Touch</span>
            </h1>
            <p className="lead mb-4" style={{color: '#6d5d66'}}>
              Expert care for your furry family members. Book your appointment today and see why Chicago's pet parents trust us with their beloved companions.
            </p>
            
            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <Button as={Link} to="/book" variant="primary" size="lg" className="d-flex align-items-center justify-content-center gap-2">
                <Calendar size={20} />
                Book Appointment
              </Button>
              <Button as={Link} to="/services" variant="outline-primary" size="lg">
                View Services
              </Button>
            </div>

            {/* Features */}
            <Row className="g-4">
              <Col sm={4}>
                <div className="d-flex gap-3">
                  <div className="text-white p-2 rounded" style={{height: 'fit-content', backgroundColor: '#ffcad4'}}>
                    <Award size={24} style={{color: '#000'}} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Expert Groomers</h6>
                    <small className="text-muted">10+ years experience</small>
                  </div>
                </div>
              </Col>
              
              <Col sm={4}>
                <div className="d-flex gap-3">
                  <div className="text-white p-2 rounded" style={{height: 'fit-content', backgroundColor: '#ffcad4'}}>
                    <Heart size={24} style={{color: '#000'}} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Gentle Care</h6>
                    <small className="text-muted">Stress-free experience</small>
                  </div>
                </div>
              </Col>
              
              <Col sm={4}>
                <div className="d-flex gap-3">
                  <div className="text-white p-2 rounded" style={{height: 'fit-content', backgroundColor: '#ffcad4'}}>
                    <Award size={24} style={{color: '#000'}} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Rewards Program</h6>
                    <small className="text-muted">Earn points on visits</small>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right Image */}
          <Col lg={6}>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                alt="Happy groomed dog"
                className="img-fluid rounded-4 shadow-lg"
                style={{border: '4px solid #ffcad4'}}
              />
              {/* Floating card */}
              <Card className="position-absolute shadow-lg floating-card" 
                    style={{bottom: '-30px', left: '-30px', maxWidth: '250px', border: '2px solid #d8e2dc'}}>
                <Card.Body>
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-white p-3 rounded-circle" style={{backgroundColor: 'rgba(255, 202, 212, 0.3)'}}>
                      <Award size={32} style={{color: '#f4acb7'}} />
                    </div>
                    <div>
                      <h3 className="h2 fw-bold mb-0">500+</h3>
                      <div className="text-muted">Happy Customers</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}