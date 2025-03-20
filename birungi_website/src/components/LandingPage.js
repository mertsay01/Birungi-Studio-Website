import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';

function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Birungi Studio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Games</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-5">
        <Container>
          <h1>Welcome to Birungi Studios</h1>
          <p className="lead">Building interactive video games for social Impact</p>
          <Button variant="light" size="lg">Get Started</Button>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="p-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <Card className="p-3">
                <Card.Body>
                  <h3>🚀 Fast</h3>
                  <p>Quick and responsive design for all devices.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3">
                <Card.Body>
                  <h3>🎨 Beautiful</h3>
                  <p>Modern and elegant UI components.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3">
                <Card.Body>
                  <h3>🔒 Secure</h3>
                  <p>Built with security and best practices in mind.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-dark text-white text-center p-5">
        <Container>
          <h2>Ready to Get Started?</h2>
          <p className="lead">Join us today and build something amazing!</p>
          <Button variant="success" size="lg">Sign Up Now</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center p-3 bg-light">
        <p>© 2025 Birungi Studio. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage;
