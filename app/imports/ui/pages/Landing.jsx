import React, { useState } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion';
import { Button, Card, Col, Container, Image, ListGroup, Row, Tab, Tabs } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Part1Stuff from '../components/Part1Stuff';
import Part2Stuff from '../components/Part2Stuff';
import UKcensus1851Set from '../components/UKcensus1851Set';
import Part3Stuff from '../components/Part3Stuff';
import AboutMe from '../components/AboutMe';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

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
          <ScrollPage>
            <Animator animation={batch(MoveOut(-1000, 0), FadeOut(1, 0))}>
              <Container>
                <Part1Stuff />
              </Container>
            </Animator>
          </ScrollPage>
        </Tab>
        <Tab eventKey="part 2" title="Part 2">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(MoveOut(-1000, -100), FadeOut(1, 0))}>
                <div>
                  <Part2Stuff />
                </div>
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={batch(Move(-100, 1800, 100, -1800), Sticky(), FadeOut(1, 0))}>
                <div>
                  <UKcensus1851Set />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Animator>
            </ScrollPage>
          </ScrollContainer>

        </Tab>
        <Tab eventKey="part 3" title="Part 3">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(MoveOut(-1000, 0), FadeOut(1, 0))}>
                <Part3Stuff />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </Tab>
      </Tabs>
      <br />
      <Container>
        <ScrollPage>
          <Animator animation={batch(Fade(1, 0))}>
            <div className=".section-3">
              <AboutMe />
            </div>
          </Animator>
          <div className=".section-3">
            <AboutMe />
          </div>
        </ScrollPage>
      </Container>
      <Row className="justify-content-center" xxl="auto" lg="auto" xl="auto" md="auto" md="auto">
        <Col>
          <Button variant="outline-secondary" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            Back to Top
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
