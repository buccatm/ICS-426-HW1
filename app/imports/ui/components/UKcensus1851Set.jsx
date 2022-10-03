import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import * as d3 from 'd3-dsv';

const numeral = require('numeral');

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const UKcensus1851Set = () => {
  const testng = d3.csvParse('age,male,female\n' +
      '0 to 9,2075391,2065096\n' +
      '10 to 19,1711664,1711627\n' +
      '20 to 29,1395091,1542876\n' +
      '30 to 39,1073914,1140383\n' +
      '40 to 49,810979,845260\n' +
      '50 to 59,560534,592970\n' +
      '60 to 69,351893,399019\n' +
      '70 to 79,166194,199326\n' +
      '80+,40772,55704');
  console.log(testng);

  const ageRange = testng.map((data) => data.age);
  ageRange.push('<b>Total</b>');
  const male = testng.map((data) => numeral(data.male).format('0,0'));
  const pieChartMale = testng.map((data) => data.male);
  const female = testng.map((data) => numeral(data.female).format('0,0'));
  const pieChartFemale = testng.map((data) => data.female);

  const totalMale = (data) => {
    let temp = 0;
    data.forEach(function (item) {
      const sum = Number(item.male) + temp;
      temp = sum;
    });
    return numeral(temp).format('0,0');
  };

  const totalFemale = (data) => {
    let temp = 0;
    data.forEach(function (item) {
      const sum = Number(item.female) + temp;
      temp = sum;
    });
    return numeral(temp).format('0,0');
  };

  male.push(totalMale(testng));
  female.push(totalFemale(testng));
  console.log(ageRange, male, female);

  return (
    <Container fluid>
      <h1 style={{ textAlign: 'left' }}>UK Census 1851 Data Set</h1>
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
        <div className="d-flex" style={{ height: '30rem' }}>
          <div className="vr" />
        </div>
        <Col md={6} lg={6} xl={6} xxl={6}>
          <Plot
            data={[
              {
                values: pieChartMale,
                labels: ageRange,
                type: 'pie',
                name: 'Male',
                hole: '.4',
                textposition: 'inside',
                textinfo: 'label+percent+name',

                domain: {
                  row: 0,
                  column: 0,
                },
              },
              {
                values: pieChartFemale,
                labels: ageRange,
                type: 'pie',
                name: 'Female',
                textposition: 'inside',
                hole: '.4',
                textinfo: 'label+percent+name',
                domain: {
                  row: 1,
                  column: 1,
                },
              },
            ]}
            layout={
              {
                showlegend: false,
                annotations: [
                  {
                    font: {
                      size: 20,
                    },
                    showarrow: false,
                    text: 'Male',
                    x: 0.17,
                    y: 0.5,
                  },
                  {
                    font: {
                      size: 20,
                    },
                    showarrow: false,
                    text: 'Female',
                    x: 0.82,
                    y: 0.5,
                  }
                ],
                grid: { rows: 1, columns: 2, pattern: 'independent' },
                title: {
                  text: 'Age Distribution for UK Data (1851)',
                  font: {
                    family: 'Courier New, monospace',
                    size: 14,
                    color: '#7f7f7f',
                  },
                },
                height: 500,
                width: 900,
              }
            }
          />
        </Col>
      </Row>
    </Container>

  );
};

export default UKcensus1851Set;
