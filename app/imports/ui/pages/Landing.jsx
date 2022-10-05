import React, { useState } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeOut, Move, MoveOut, Sticky } from 'react-scroll-motion';
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Part1Stuff from '../components/Part1Stuff';
import Part2Stuff from '../components/Part2Stuff';
import UKcensus1851Set from '../components/UKcensus1851Set';
import Part3Stuff from '../components/Part3Stuff';
import AboutMe from '../components/AboutMe';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const [key, setKey] = useState('Home');

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
              </Animator>
            </ScrollPage>
          </ScrollContainer>

        </Tab>
        <Tab eventKey="part 3" title="Part 3">
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(MoveOut(1000, 0), FadeOut(1, 0))}>
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
      <Row className="justify-content-end" xxl="auto" lg="auto" xl="auto" md="auto">
        <Col>
          <Button variant="outline-secondary" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} style={{ marginTop: '2rem' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-square-fill"
              viewBox="0 0 16 16"
              style={{ marginRight: '2rem' }}
            >
              <path
                d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
              />
            </svg>Back to Top
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
