import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import * as d3 from 'd3-dsv';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Part2Stuff = () => {
  const testng = d3.tsvParse('age\tmale\tfemale\n' +
      '0-1\t8.2\t8.9\n' +
      '2-5\t14.0\t14.7\n' +
      '6-10\t12.1\t11.2\n' +
      '11-15\t7.8\t7.1\n' +
      '16-20\t7.2\t7.2\n' +
      '21-40\t12.1\t11.8\n' +
      '41-60\t13.7\t12.9\n' +
      '61-80\t20.5\t20.5\n' +
      'over 80\t39.6\t37.8');

  const ageRange = testng.map((data) => data.age);
  const male = testng.map((data) => data.male);
  const female = testng.map((data) => data.female);

  return (
    <Container fluid>
      <h1 style={{ textAlign: 'left' }}>Naples Cholera Age Gender Data 1884-1911</h1>
      <br />
      <Row xxl="auto" xl="auto" lg="auto" md="auto" sm="auto" xs={1}>
        <Col md={4} lg={4} xl={4} xxl={4} style={{ marginRight: '4rem' }}>
          <Plot
            data={[
              {
                x: male,
                y: female,
                type: 'table',
                name: 'test',
                columnWidth: [1, 1, 1],
                columnorder: [0, 1, 2],
                header: {
                  values: ['Age', 'Male', 'Female'],
                  align: 'center',
                  line: { width: 1, color: 'rgb(50, 50, 50)' },
                  fill: { color: ['#D1D1D1', '#47B5FF', '#FF74B1'] },
                  font: { family: 'Arial', size: 16, color: 'white' },
                },
                cells: {
                  values: [ageRange, male, female],
                  align: ['left', 'right', 'right'],
                  height: 25,
                  line: { color: 'black', width: 1 },
                  fill: { color: ['#F5EDDC', '#DFF6FF', '#FFD6EC'] },
                  font: { family: 'Arial', size: 15, color: ['black'] },
                },
              },
            ]}
            layout={
              {
                width: 500,
                height: 600,
                title: {
                  text: 'Naples in the Time of Cholera 1884-1911 DataSheet',
                  font: {
                    family: 'Courier New, monospace',
                    size: 14,
                    color: '#7f7f7f',
                  },
                },
              }
            }
          />
        </Col>
        <div className="d-flex" style={{ height: '35rem' }}>
          <div className="vr" />
        </div>
        <Col md={6} lg={6} xl={6} xxl={6}>
          <Plot
            data={[
              {
                x: ageRange,
                y: male,
                name: 'Male',
                type: 'bar',
                marker: {
                  color: '#47B5FF',
                },
              },
              {
                x: ageRange,
                y: female,
                name: 'Female',
                type: 'bar',
                marker: {
                  color: '#FF74B1',
                },
              },
            ]}
            layout={
              {
                legend: {
                  orientation: 'h',
                },
                width: 1000,
                height: 500,
                title: {
                  text: 'Naples in the Time of Cholera 1884-1911',
                  font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                  },
                },
                xaxis: {
                  title: {
                    text: 'Age Range',
                    font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f',
                    },
                  },
                },
                yaxis: {
                  title: {
                    text: 'Deaths per 10,000 Inhabitants',
                    font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f',
                    },
                  },
                },
              }
            }
          />
        </Col>
      </Row>

    </Container>

  );
};

export default Part2Stuff;
