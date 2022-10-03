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

  const pieChartTotalMale = numeral(male[male.length - 1]).value();
  const pieChartTotalFemale = numeral(female[female.length - 1]).value();
  console.log(ageRange, male, female);

  return (
    <Container fluid>
      <h1 style={{ textAlign: 'left' }}>UK Census 1851 Data Set</h1>
      <br />
      <Row xxl="auto" xl="auto" lg="auto" md="auto" sm="auto" xs={1}>
        <Col style={{ marginRight: '4rem' }} xxl="4" xl="4" lg="4" md="4" sm="auto">
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
        <Col xxl="5" xl="5" lg="5" md="5" sm="auto">
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
            ]}
            layout={
              {
                title: {
                  text: 'Census Age Data for Men (1851)',
                  font: {
                    family: 'Courier New, monospace',
                    size: 14,
                    color: '#7f7f7f',
                  },
                },
                height: 550,
                width: 500,
              }
            }
          />
        </Col>
        <Col xxl="1" xl="1" lg="1" md="1" sm="1">
          <Plot
            data={[
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
                title: {
                  text: 'Census Age Data for Women (1851)',
                  font: {
                    family: 'Courier New, monospace',
                    size: 14,
                    color: '#7f7f7f',
                  },
                },
                height: 550,
                width: 500,
              }
            }
          />
        </Col>
      </Row>
      <Row xxl="auto" xl="auto" lg="auto" md="auto" sm="auto" xs={1}>
        <Col>
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
                values: [pieChartTotalMale, pieChartTotalFemale],
                labels: ['Male', 'Female'],
                type: 'pie',
                name: 'Total',
                hole: '.4',
                marker: {
                  colors: ['#47B5FF', '#FF74B1'],
                },
                font: { family: 'Arial', size: 25, color: ['black'] },
                textposition: 'inside',
                textinfo: 'label+percent+name',
                domain: {
                  row: 0,
                  column: 1,
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
                  row: 0,
                  column: 2,
                },
              },
            ]}
            layout={
              {
                showlegend: false,
                annotations: [
                  {
                    font: {
                      size: 30,
                    },
                    showarrow: false,
                    text: 'Male',
                    x: 0.1119,
                    y: 0.50,
                  },
                  {
                    font: {
                      size: 30,
                    },
                    showarrow: false,
                    text: 'Total',
                    x: 0.50,
                    y: 0.50,
                  },
                  {
                    font: {
                      size: 30,
                    },
                    showarrow: false,
                    text: 'Female',
                    x: 0.90,
                    y: 0.50,
                  },
                ],
                grid: { rows: 1, columns: 3, pattern: 'independent' },
                title: {
                  text: 'Age Distribution for UK Data (1851)',
                  font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f',
                  },
                },
                height: 500,
                width: 1400,
              }
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UKcensus1851Set;
