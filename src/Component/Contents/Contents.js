import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Filter from "./Filter";
import Datepicker from './Datepicker';
import Search from './Search';
import CampaignChart from './CampaignChart';

import GraphChart from './GraphChart';

const Contents = () => {
    return (
      <Col className="content-wrap p-4 bg-black text-white">
        <Row>
          <Col className="content-title col-md-6 col-12">
            <h3>Campaigns View</h3>
          </Col>
          <Datepicker />
        </Row>
        <Row className="mt-4 pt-3">
          <Col className="action-col d-flex align-items-center">
            <Button  variant="primary" className="d-none d-md-inline"><i className="fa fa-plus" aria-hidden="true"></i> New Campaign</Button>
            <Filter/>
          </Col>
          <Search />
        </Row>
        <CampaignChart />
        <GraphChart />
      </Col>
    );
}

export default Contents;