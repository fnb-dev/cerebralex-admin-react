import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Filter from "./Filter";
import Datepicker from './Datepicker';
import Search from './Search';
import CampaignChart from './CampaignChart';

import graphchart from '../../images/graphchart.jpg';

const Contents = () => {
    return (
      <Col className="content-wrap p-4 bg-black text-white">
        <Row>
          <Col className="content-title">
            <h3>Campaigns View</h3>
          </Col>
          <Datepicker />
        </Row>
        <Row className="mt-4 pt-3">
          <Col className="action-col d-flex">
            <Button  variant="primary"><i className="fa fa-plus" aria-hidden="true"></i> New Campaign</Button>
            <Filter/>
          </Col>
          <Search />
        </Row>
        <CampaignChart />
        <div className="graph-chart-wrap">
          <Row className="title no-gutters">
            <Col sm={12}>
              <span>Top Campaigns</span>
            </Col>
          </Row>
          <Row className="graph-row no-gutters">
            <Col className="information-col col-auto">
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
            <Col className="graph-chart col-auto">
              <img src={graphchart} alt="Graph chart" />
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col className="col-auto">&nbsp;</Col>
            <Col className="d-flex time-range">
              <span>Sun</span>
              <span className="ml-auto">Sat</span>
            </Col>
          </Row>
        </div>
      </Col>
    );
}

export default Contents;