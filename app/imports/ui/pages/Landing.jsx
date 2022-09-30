import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import * as d3 from 'd3-dsv';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const [showTB1, setShowTB1] = useState(true);
  const [showTB2, setShowTB2] = useState(false);
  const testng = d3.tsvParse('Date\tAttack\tDeath\n' +
      '19-Aug-1854\t1\t1\n' +
      '20-Aug-1854\t1\t0\n' +
      '21-Aug-1854\t1\t2\n' +
      '22-Aug-1854\t0\t0\n' +
      '23-Aug-1854\t1\t0\n' +
      '24-Aug-1854\t1\t2\n' +
      '25-Aug-1854\t0\t0\n' +
      '26-Aug-1854\t1\t0\n' +
      '27-Aug-1854\t1\t1\n' +
      '28-Aug-1854\t1\t0\n' +
      '29-Aug-1854\t1\t1\n' +
      '30-Aug-1854\t8\t2\n' +
      '31-Aug-1854\t56\t3\n' +
      '1-Sep-1854\t143\t70\n' +
      '2-Sep-1854\t116\t127\n' +
      '3-Sep-1854\t54\t76\n' +
      '4-Sep-1854\t46\t71\n' +
      '5-Sep-1854\t36\t45\n' +
      '6-Sep-1854\t20\t37\n' +
      '7-Sep-1854\t28\t32\n' +
      '8-Sep-1854\t12\t30\n' +
      '9-Sep-1854\t11\t24\n' +
      '10-Sep-1854\t5\t18\n' +
      '11-Sep-1854\t5\t15\n' +
      '12-Sep-1854\t1\t6\n' +
      '13-Sep-1854\t3\t13\n' +
      '14-Sep-1854\t0\t6\n' +
      '15-Sep-1854\t1\t8\n' +
      '16-Sep-1854\t4\t6\n' +
      '17-Sep-1854\t2\t5\n' +
      '18-Sep-1854\t3\t2\n' +
      '19-Sep-1854\t0\t3\n' +
      '20-Sep-1854\t0\t0\n' +
      '21-Sep-1854\t2\t0\n' +
      '22-Sep-1854\t1\t2\n' +
      '23-Sep-1854\t1\t3\n' +
      '24-Sep-1854\t1\t0\n' +
      '25-Sep-1854\t1\t0\n' +
      '26-Sep-1854\t1\t2\n' +
      '27-Sep-1854\t1\t0\n' +
      '28-Sep-1854\t0\t2\n' +
      '29-Sep-1854\t0\t1');

  console.log(testng);
  const dates = testng.map((datas) => {
    const temp = datas.Date.replace('-1854', '');
    return temp.replace('-', ' ').split(' ').reverse().join(' ');
  });
  console.log(dates);



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
      <h1 style={{ textAlign: 'center' }}>My Graph</h1>
      <Row md="auto" lg="auto" xs="auto">
        <Col md={3} lg={3} xs={1}>
          <Card>
            <Card.Title>
              <h4 style={{ textAlign: 'center' }}>Put Setting stuffs here</h4>
            </Card.Title>
            <Card.Body>
              <Button
                variant="outline-primary"
                style={{ marginBottom: '10px' }}
                onClick={update}
              >
                {(showTB1) ? 'Show Cholera Attacks Table' : 'Show Cholera Deaths Table'}
              </Button>
            </Card.Body>
          </Card>

        </Col>
        <Col md={1} lg={1} xs={1}>
          {(showTB1) ? (
            <Plot
              data={[
                {
                  type: 'bar',
                  name: 'Death',
                  x: dates,
                  y: [
                    1,
                    0,
                    2,
                    0,
                    0,
                    2,
                    0,
                    0,
                    1,
                    0,
                    1,
                    2,
                    3,
                    70,
                    127,
                    76,
                    71,
                    45,
                    37,
                    32,
                    30,
                    24,
                    18,
                    15,
                    6,
                    13,
                    6,
                    8,
                    6,
                    5,
                    2,
                    3,
                    0,
                    0,
                    2,
                    3,
                    0,
                    0,
                    2,
                    0,
                    2,
                    1,
                  ],
                  mode: 'markers+text',
                },
                {
                  type: 'bar',
                  name: 'Total Deaths + Attacks',
                  x: dates,
                  y: [
                    2,
                    1,
                    3,
                    0,
                    1,
                    3,
                    0,
                    1,
                    2,
                    1,
                    2,
                    10,
                    59,
                    213,
                    243,
                    130,
                    117,
                    81,
                    57,
                    60,
                    42,
                    35,
                    23,
                    20,
                    7,
                    16,
                    6,
                    9,
                    10,
                    7,
                    5,
                    3,
                    0,
                    2,
                    3,
                    4,
                    1,
                    1,
                    3,
                    1,
                    2,
                    1,
                  ],
                  mode: 'markers+text',
                },
              ]}
              layout={{
                width: 1020,
                height: 540,
                title: 'Cholera Deaths',
                xaxis: {
                  title: {
                    text: '\n\nDate (MM-DD-YYY)',
                    font: {
                      family: 'Courier New, monospace',
                      size: 28,
                      color: '#7f7f7f',
                    },
                  },
                },
                yaxis: {
                  title: {
                    text: 'Number of Deaths',
                    font: {
                      family: 'Courier New, monospace',
                      size: 28,
                      color: '#7f7f7f',
                    },
                  },
                } }}
            />
          ) : (
            <Plot
              data={[
                {
                  type: 'bar',
                  name: 'Total',
                  x: [
                    '19-Aug-1854',
                    '20-Aug-1854',
                    '21-Aug-1854',
                    '22-Aug-1854',
                    '23-Aug-1854',
                    '24-Aug-1854',
                    '25-Aug-1854',
                    '26-Aug-1854',
                    '27-Aug-1854',
                    '28-Aug-1854',
                    '29-Aug-1854',
                    '30-Aug-1854',
                    '31-Aug-1854',
                    '1-Sep-1854',
                    '2-Sep-1854',
                    '3-Sep-1854',
                    '4-Sep-1854',
                    '5-Sep-1854',
                    '6-Sep-1854',
                    '7-Sep-1854',
                    '8-Sep-1854',
                    '9-Sep-1854',
                    '10-Sep-1854',
                    '11-Sep-1854',
                    '12-Sep-1854',
                    '13-Sep-1854',
                    '14-Sep-1854',
                    '15-Sep-1854',
                    '16-Sep-1854',
                    '17-Sep-1854',
                    '18-Sep-1854',
                    '19-Sep-1854',
                    '20-Sep-1854',
                    '21-Sep-1854',
                    '22-Sep-1854',
                    '23-Sep-1854',
                    '24-Sep-1854',
                    '25-Sep-1854',
                    '26-Sep-1854',
                    '27-Sep-1854',
                    '28-Sep-1854',
                    '29-Sep-1854',
                  ],
                  y: [
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    1,
                    8,
                    56,
                    143,
                    116,
                    54,
                    46,
                    36,
                    20,
                    28,
                    12,
                    11,
                    5,
                    5,
                    1,
                    3,
                    0,
                    1,
                    4,
                    2,
                    3,
                    0,
                    0,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    0,
                    0,
                  ],
                },
              ]}
              layout={{
                width: 1020,
                height: 540,
                title: 'Cholera Attacks',
                xaxis: {
                  title: {
                    text: 'Date (MM-DD-YYYY)',
                    font: {
                      family: 'Courier New, monospace',
                      size: 28,
                      color: '#7f7f7f',
                    },
                  },
                },
                yaxis: {
                  title: {
                    text: 'Attacks',
                    font: {
                      family: 'Courier New, monospace',
                      size: 28,
                      color: '#7f7f7f',
                    },
                  },
                },
              }}
            />
          )}

        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
