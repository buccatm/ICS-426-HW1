import React from 'react';
import { Container, Col, Card, Row, Image, ListGroup } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <Container fluid>
    <Card>
      <Card.Title>
        <h1>
          About Presenter
        </h1>
      </Card.Title>
      <Card.Body>
        <Row style={{ marginTop: '4rem' }} className="justify-content-center" xxl="auto" xl="auto" lg="auto" md="auto">
          <Col>
            <Image src="/images/meteor-logo.png" roundedCircle />
          </Col>
          <Col xxl="2" xl="2" lg="2" md="2" />
          <Col>
            <h2>
              Marcos Buccat Jr.
            </h2>
            <h4>
              <p>
                <a href="https://buccatm.github.io/" target="_blank" rel="noreferrer">GitHub Page</a>
              </p>
            </h4>
            <br />
            <h3>
              Framework & Libraries
            </h3>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a href="https://guide.meteor.com/react.html" target="_blank" rel="noreferrer">
                  Meteor React
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://react-bootstrap.github.io/getting-started/introduction" target="_blank" rel="noreferrer">
                  React Bootstrap
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://plotly.com/javascript/react/" target="_blank" rel="noreferrer">
                  Plotly.js React
                </a>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <h3>
              Datas
            </h3>
            <ListGroup variant="flush">
              <ListGroup.Item>CholeraDeath.tsv</ListGroup.Item>
              <ListGroup.Item>CholeraDeathLocations.cvs</ListGroup.Item>
              <ListGroup.Item>CholeraPumpLocations.cvs</ListGroup.Item>
              <ListGroup.Item>NaplesCholeraAgeSexData.tsv</ListGroup.Item>
              <ListGroup.Item>UK_Census1851.csv</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <br />
  </Container>
);

export default Footer;
