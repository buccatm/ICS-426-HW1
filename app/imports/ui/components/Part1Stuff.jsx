import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import * as d3 from 'd3-dsv';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Part1Stuff = () => {
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

  const dates = testng.map((datas) => {
    const temp = datas.Date.replace('-1854', '');
    return temp.replace('-', ' ').split(' ').reverse().join(' ');
  });

  const attacks = testng.map((data) => data.Attack);
  const test = [];
  const test2 = [];
  testng.forEach(function (items) {
    if (items.Date.includes('Aug')) {
      test.push(items.Attack);
    }
  });

  dates.forEach(function (items) {
    if (items.includes('Aug')) {
      test2.push(items);
    }
  });

  const deaths = testng.map((data) => data.Death);

  const total = testng.map((data) => Number(data.Attack) + Number(data.Death));

  // const totalAttacks = [];

  let startTotalAttacks = 0;
  const totalAttacks = testng.map((items) => {
    const tot = startTotalAttacks + Number(items.Attack);
    startTotalAttacks = tot;
    return tot;
  });

  let startTotalDeaths = 0;
  const totalDeaths = testng.map((items) => {
    const tot = Number(items.Death) + startTotalDeaths;
    startTotalDeaths = tot;
    return tot;
  });
  return (
    <Container>
      <h1 style={{ textAlign: 'left' }}>Cholera Fatalities 1854</h1>
      <Row xxl="auto" xl="auto" lg="auto" md="auto" sm="auto" xs={1}>
        <Col md={4} lg={4} xl={4} xxl={4} style={{ marginRight: '4rem' }}>
          <Plot
            data={[
              {
                type: 'table',
                name: 'Death',
                columnwidth: [50, 50, 50, 50, 50],
                columnorder: [0, 1, 2, 3, 4],
                header: {
                  values: [...testng.columns, 'Total Attacks', 'Total Deaths'],
                  align: 'center',
                  line: { width: 1, color: 'rgb(50, 50, 50)' },
                  fill: { color: ['rgb(81,88,217)'] },
                  font: { family: 'Arial', size: 11, color: 'white' },
                },
                cells: {
                  values: [dates, attacks, deaths, totalAttacks, totalDeaths],
                  align: ['left', 'right', 'right', 'right', 'right'],
                  line: { color: 'black', width: 1 },
                  fill: { color: ['rgba(228, 222, 249, 0.65)'] },
                  font: { family: 'Arial', size: 10, color: ['black'] },
                },
                x: dates,
                y: deaths,
                mode: 'markers+text',
              },
            ]}
            layout={{
              width: 500,
              height: 540,
              title: {
                text: 'Cholera Attacks Data Sheet (1854)',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f',
                },
              },
              xaxis: {
                title: {
                  text: '\n\nDate (DD-MM)',
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
        </Col>
        <div className="d-flex" style={{ height: '35rem' }}>
          <div className="vr" />
        </div>
        <Col md={6} lg={6} xl={6} xxl={6}>
          <Plot
            data={[
              {
                mode: 'lines+markers',
                name: 'Attacks',
                x: dates,
                y: attacks,
                text: [dates, attacks],
                textposition: 'top',
              },
              {
                mode: 'lines+markers',
                name: 'Total Attacks',
                x: dates,
                y: totalAttacks,
                text: [dates, attacks],
                textposition: 'top',
              },
              {
                mode: 'lines+markers',
                name: 'Deaths',
                x: dates,
                y: deaths,
                text: [dates, attacks],
                textposition: 'top',
              },
              {
                mode: 'lines+markers',
                name: 'Total Deaths',
                x: dates,
                y: totalDeaths,
                text: [dates, attacks],
                textposition: 'top',
              },
            ]}
            layout={{
              width: '960',
              height: '540',
              hovermode: 'x',
              title: {
                text: 'Cholera Attacks (1854)',
                font: {
                  family: 'Courier New, monospace',
                  size: 38,
                  color: '#7f7f7f',
                },
              },
              xaxis: {
                tickmode: 'linear',
                tick0: 0,
                dtick: 4,
                title: {
                  text: 'Date (MM-DD)',
                  font: {
                    family: 'Courier New, monospace',
                    size: 28,
                    color: '#7f7f7f',
                  },
                },
              },
              yaxis: {
                title: {
                  text: 'Number of Attacks',
                  font: {
                    family: 'Courier New, monospace',
                    size: 28,
                    color: '#7f7f7f',
                  },
                },
              },
            }}
          />
        </Col>
      </Row>
    </Container>

  );
};

export default Part1Stuff;
