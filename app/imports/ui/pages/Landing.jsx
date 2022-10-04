import React, { useState } from 'react';
import { Card, Col, Container, Image, ListGroup, Row, Tab, Tabs } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Part1Stuff from '../components/Part1Stuff';
import Part2Stuff from '../components/Part2Stuff';
import UKcensus1851Set from '../components/UKcensus1851Set';
import Part3Stuff from '../components/Part3Stuff';
import AboutMe from "../components/AboutMe";

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
    <Container id={PAGE_IDS.LANDING} className="py-3" fluid>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          fill
        >
          <Tab eventKey="Home" title="Part 1">
            <Part1Stuff />
          </Tab>
          <Tab eventKey="part 2" title="Part 2">
            <Part2Stuff />
            <br />
            <UKcensus1851Set />
          </Tab>
          <Tab eventKey="part 3" title="Part 3">
            <Part3Stuff />
          </Tab>
        </Tabs>
      <AboutMe />
    </Container>
  );
};

export default Landing;
