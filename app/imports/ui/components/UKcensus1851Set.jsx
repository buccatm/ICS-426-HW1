import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import * as d3 from 'd3-dsv';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const UKcensus1851Set = () => {
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


  return (
    <Container fluid>
      <h1 style={{ textAlign: 'left' }}>UKcensus1851 Data Set</h1>
        <br />

    </Container>

  );
};

export default UKcensus1851Set;
