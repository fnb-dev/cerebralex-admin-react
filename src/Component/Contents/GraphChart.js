import React from 'react';
import {Row, Col} from 'react-bootstrap';

import graphchart from '../../images/graphchart.jpg';

const GraphChart = () => {
    return(
        <div className="graph-chart-wrap">
          <Row className="title no-gutters">
            <Col sm={12}>
              <span>Top Campaigns</span>
            </Col>
          </Row>
          <Row className="graph-row no-gutters">
            <Col className="information-col col-12 col-md-auto">
              <div className="info-item clicks">
                <p>Clicks</p>
                <p>4,856,857</p>
              </div>
              <div className="info-item impressions">
                <p>Impressions</p>
                <p>27,856,857</p>
              </div>
              <div className="info-item cost">
                <p>Cost</p>
                <p>$24,959.84</p>
              </div>
            </Col>
            <Col className="graph-chart col-12 mt-5 mt-md-0 col-md-auto d-none d-md-inline">
              <img src={graphchart} alt="Graph chart" />
            </Col>
          </Row>
          < Row className = "no-gutters d-none d-md-flex" >
            <Col className="col-md-auto col-12">&nbsp;</Col>
            <Col className="d-flex time-range">
              <span>Sun</span>
              <span className="ml-auto">Sat</span>
            </Col>
          </Row>
        </div>
    )
}

export default GraphChart;