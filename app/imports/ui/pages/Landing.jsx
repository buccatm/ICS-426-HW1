import React, { useState } from 'react';
import { Card, Col, Container, Image, ListGroup, Row, Tab, Tabs } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Part1Stuff from '../components/Part1Stuff';
import Part2Stuff from '../components/Part2Stuff';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const [showTB1, setShowTB1] = useState(true);
  const [showTB2, setShowTB2] = useState(false);
  const [key, setKey] = useState('Home');

  const update = () => {
    if (showTB1 === true) {
      setShowTB1(false);
      setShowTB2(true);
    } else if (showTB2 === true) {
      setShowTB2(false);
      setShowTB1(true);
    }
  };

  return (
    <Container id={PAGE_IDS.LANDING} className="py-3">
      <Container style={{ marginBottom: '5rem' }}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="Home" title="Part 1">
            <Part1Stuff />
          </Tab>
          <Tab eventKey="part 2" title="Part 2">
            <Part2Stuff />
          </Tab>
          <Tab eventKey="part 3" title="Contact" />
        </Tabs>
      </Container>
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
                  <ListGroup.Item>Data 1</ListGroup.Item>
                  <ListGroup.Item>Data 2</ListGroup.Item>
                  <ListGroup.Item>Data 3</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </Container>
  );
};

export default Landing;
