import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'nail-grind',
    name: 'Nail Grind',
    price: 'Starting at $20',
    popular: false,
    description: 'Professional nail grinding service to keep your pup\'s paws healthy and comfortable.',
    features: [
      'Gentle nail grinding',
      'Smooth finish',
      'Quick and stress-free',
    ],
  },
  {
    id: 'puppy-intro',
    name: 'Puppy Introduction',
    price: 'Starting at $70',
    popular: true,
    tagline: 'The First-Timer Experience',
    description: 'Designed for pups under 6 months, this gentle introduction helps them build confidence and love the grooming process from day one.',
    features: [
      'Gentle bath with mild, puppy-safe shampoo',
      'Soft fluff dry & gentle handling throughout',
      'Nail trim, ear cleaning & light brush-out',
      'Face, paw, and sanitary tidy to introduce the basics',
      'Teeth brushing & soothing blueberry facial',
      'Sweet finishing touch: bow tie or bandana',
    ],
    note: 'Our goal is simple — create a positive, calm grooming foundation for a lifetime of stress-free visits.',
  },
  {
    id: 'full-small',
    name: 'Full Service - Small',
    price: 'Starting at $110',
    popular: true,
    tagline: 'A Signature Bark N Boujee Experience',
    description: 'Our full-service groom gives your pup a complete, luxury refresh.',
    features: [
      'Gentle bath with premium, natural shampoo + conditioner',
      'Soothing blueberry facial',
      'Fluff dry with nourishing leave-in conditioner',
      'Nail trimming, ear cleaning, and full coat brush-out',
      'Teeth brushing for fresh breath and healthy smile',
      'Customized haircut tailored to your pup\'s breed and style',
      'Chic finishing touch: bow tie, bandana, or ear bows',
    ],
    note: 'Your pup will leave feeling polished, pampered, and ready to turn heads.',
  },
  {
    id: 'full-medium',
    name: 'Full Service - Medium',
    price: 'Starting at $130',
    popular: true,
    tagline: 'A Signature Bark N Boujee Experience',
    description: 'Our full-service groom gives your pup a complete, luxury refresh.',
    features: [
      'Gentle bath with premium, natural shampoo + conditioner',
      'Soothing blueberry facial',
      'Fluff dry with nourishing leave-in conditioner',
      'Nail trimming, ear cleaning, and full coat brush-out',
      'Teeth brushing for fresh breath and healthy smile',
      'Customized haircut tailored to your pup\'s breed and style',
      'Chic finishing touch: bow tie, bandana, or ear bows',
    ],
    note: 'Your pup will leave feeling polished, pampered, and ready to turn heads.',
  },
  {
    id: 'full-large',
    name: 'Full Service - Large',
    price: 'Starting at $150',
    popular: true,
    tagline: 'A Signature Bark N Boujee Experience',
    description: 'Our full-service groom gives your pup a complete, luxury refresh.',
    features: [
      'Gentle bath with premium, natural shampoo + conditioner',
      'Soothing blueberry facial',
      'Fluff dry with nourishing leave-in conditioner',
      'Nail trimming, ear cleaning, and full coat brush-out',
      'Teeth brushing for fresh breath and healthy smile',
      'Customized haircut tailored to your pup\'s breed and style',
      'Chic finishing touch: bow tie, bandana, or ear bows',
    ],
    note: 'Your pup will leave feeling polished, pampered, and ready to turn heads.',
  },
  {
    id: 'full-xlarge',
    name: 'Full Service - X Large',
    price: 'Starting at $190',
    popular: false,
    tagline: 'A Signature Bark N Boujee Experience',
    description: 'Our full-service groom gives your pup a complete, luxury refresh.',
    features: [
      'Gentle bath with premium, natural shampoo + conditioner',
      'Soothing blueberry facial',
      'Fluff dry with nourishing leave-in conditioner',
      'Nail trimming, ear cleaning, and full coat brush-out',
      'Teeth brushing for fresh breath and healthy smile',
      'Customized haircut tailored to your pup\'s breed and style',
      'Chic finishing touch: bow tie, bandana, or ear bows',
    ],
    note: 'Your pup will leave feeling polished, pampered, and ready to turn heads.',
  },
];

export default function Services() {
  return (
    <div className="bg-light py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold mb-3">Our Services</h1>
          <p className="lead text-muted mb-4">
            Luxury grooming experiences tailored to your pup's needs
          </p>
          <Button as={Link} to="/book" variant="primary" size="lg">
            Book Appointment
          </Button>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service) => (
            <Col key={service.id} lg={6}>
              <Card 
                className="border-0 shadow-sm h-100"
                style={service.popular ? {borderLeft: '4px solid #ffcad4'} : {}}
              >
                <Card.Body className="p-4">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="h4 mb-2">{service.name}</h3>
                      <div className="fw-bold mb-2" style={{color: '#f4acb7', fontSize: '1.5rem'}}>
                        {service.price}
                      </div>
                      {service.tagline && (
                        <Badge bg="light" text="dark" className="px-3 py-2">
                          {service.tagline}
                        </Badge>
                      )}
                    </div>
                    {service.popular && (
                      <Badge style={{backgroundColor: '#9d8189'}} className="px-3 py-2">
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-4">{service.description}</p>

                  {/* Features List */}
                  <div className="mb-3">
                    <h6 className="fw-bold mb-3">What's Included:</h6>
                    <ul className="mb-0">
                      {service.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  {service.note && (
                    <div 
                      className="p-3 rounded mt-4"
                      style={{backgroundColor: 'rgba(216, 226, 220, 0.3)'}}
                    >
                      <small className="text-muted fst-italic">
                        {service.note}
                      </small>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-4">
                    <Button 
                      as={Link} 
                      to="/book" 
                      variant="outline-primary" 
                      className="w-100"
                    >
                      Book This Service
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-5 p-5 rounded-4"
          style={{background: 'linear-gradient(135deg, #ffcad4 0%, #f4acb7 100%)'}}
        >
          <h3 className="fw-bold mb-3">Not Sure Which Service is Right for Your Pup?</h3>
          <p className="lead mb-4">
            Give us a call and we'll help you choose the perfect grooming experience.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button 
              href="tel:+13128255921" 
              variant="light"
              size="lg"
              className="shadow"
              style={{color: '#f4acb7', fontWeight: '600'}}
            >
              Call: (312) 825-5921
            </Button>
            <Button 
              as={Link} 
              to="/book" 
              variant="outline-light"
              size="lg"
              style={{borderWidth: '2px', color: '#000', borderColor: '#fff'}}
            >
              Book Online
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <Row className="mt-5 g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mb-3" style={{color: '#f4acb7'}}>Expert Groomers</h5>
                <p className="text-muted mb-0">
                  Our experienced team knows how to handle every breed and temperament with care.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mb-3" style={{color: '#f4acb7'}}>Premium Products</h5>
                <p className="text-muted mb-0">
                  We use only natural, high-quality shampoos and conditioners that are gentle on your pup's skin.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mb-3" style={{color: '#f4acb7'}}>Stress-Free Experience</h5>
                <p className="text-muted mb-0">
                  We take extra time with nervous or anxious pets to ensure they feel safe and comfortable.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}