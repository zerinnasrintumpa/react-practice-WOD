import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

class BottomFooter extends React.Component {
  render() {
    return (
        <footer className="mt-auto bg-light fixed-bottom py-3">
          <Container>
            <Row>
              <Col>
                <h3>Hours</h3>
                Wednesday - Thursday 5pm – 10pm<br/>
                Friday - Saturday 5pm – 11pm<br/>
                Sunday Brunch 10am - 2pm
                </Col>
              <Col>
                <h3>Stay Connected</h3>
                <u>Instagram</u><br/>
                <u>Contact</u><br/>
                <u>Gift Cards</u><br/>
                <u>Reservations</u>
              </Col>
              <Col></Col>
              <Col>
                <h3>THE BOARDROOM</h3>
                44 Kainehe St.<br/>
                Kailua, HI 96734<br/>
                <br/>
                  (808)807-5640
              </Col>
            </Row>
          </Container>
        </footer>
    );
  }
}

export default BottomFooter;
