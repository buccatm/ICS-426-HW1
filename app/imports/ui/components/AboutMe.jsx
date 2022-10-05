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
            <ListGroup variant="flush" style={ { overflow: 'scroll', overflowX: 'hidden', height: '400px' }}>
              <ListGroup.Item>
                <div>
                  <h3>
                    CholeraDeath.tsv
                  </h3>
                  <h6>
                    <p style={{ width: '20rem' }}>
                      Cholera Attacks in London, 1854. This data contains the number of attacks,
                      deaths for each day.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak" target="_blank" rel="noreferrer">
                      Related Article Here
                    </a>
                  </h6>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <h3>
                    CholeraDeathLocations.cvs
                  </h3>
                  <h6>
                    <p style={{ width: '20rem' }}>
                      Cholera Attacks in London, 1854. This data contains the location of the attacks
                      and the number of Cholera cases that occurred at the location.
                    </p>
                  </h6>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <h3>
                    CholeraPumpLocations.cvs
                  </h3>
                  <h6>
                    <p style={{ width: '20rem' }}>
                      Cholera Attacks in London, 1854. This data contains the location of the pumps.
                    </p>
                  </h6>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <h3>
                    NaplesCholeraAgeSexData.tsv
                  </h3>
                  <h6>
                    <p style={{ width: '20rem' }}>
                      Naples in the Time of Cholera 1884-1911, deaths per 10,000 inhabitants of that age group.
                    </p>
                  </h6>
                  <a href="http://assets.cambridge" target="_blank" rel="noreferrer">
                    Related Article Here
                  </a>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <h3>
                    UK_Census1851.csv
                  </h3>
                  <h6>
                    <p style={{ width: '20rem' }}>
                      UK census 1851
                    </p>
                  </h6>
                  <a href="http://www.visionofbritain.org.uk/" target="_blank" rel="noreferrer">
                    Related Article Here
                  </a>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <br />
  </Container>
);

export default Footer;
