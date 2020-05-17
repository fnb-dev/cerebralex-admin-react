import React, {useState} from 'react';
import {Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import Filter from "./Filter";
import Datepicker from './Datepicker';
import Search from './Search';

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
        <div className="campaign-chart mt-3 pt-3">
          <Row className="title-row no-gutters">
            <Col className="action-column col-auto">
              <div className="select-mark">
                <input id="checkbox-1" className="select-check" type="checkbox" />
                <label for="checkbox-1" className="checkbox"></label>
              </div>
            </Col>
            <Col className="name col-auto">Campaign Name</Col>
            <Col className="budget">Daily Budget</Col>
            <Col className="click">Clicks</Col>
            <Col className="impressions">Impressions</Col>
            <Col className="ctr">CTR</Col>
            <Col className="avg-cpc">Avg. CPC</Col>
            <Col className="cost">Cost</Col>
            <Col className="avg-pos">Avg. Pos</Col>
            <Col className="showed">Showed</Col>
          </Row>
          <Row className="row-item no-gutters">
            <Col className="action-column col-auto">
              <div className="select-mark">
                <input id="checkbox-2" className="select-check" type="checkbox" />
                <label for="checkbox-2" className="checkbox"></label>
              </div>
              <div className="activities">
                <div className="activities-triger">
                  <span></span>
                  <Button  variant="transparent"><i className="fa fa-chevron-down" aria-hidden="true"></i></Button>
                </div>
                <div className="dropdown-box activities-dropdown">
                    <Form.Group className="radio">
                      <Col sm={12}>
                          <Form.Check
                          type="radio"
                          label="Active"
                          name="status"
                          id="active3"
                          />
                          <Form.Check
                          type="radio"
                          label="Pause"
                          name="status"
                          id="pause3"
                          className="pause"
                          />
                      </Col>
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col className="name col-auto">
              <span>Kissterra Auto - Mobile Clicks Gold</span>
              <div className="action d-flex">
                <Button><i className="fas fa-pen"></i>Edit</Button>
                <Button><i className="fas fa-sort-amount-up"></i>Ad Group</Button>
                <Button><i className="fas fa-ball-pile"></i>Channels</Button>
              </div>
            </Col>
            <Col className="budget">
              <span>$25,000</span>
              <div className="edit-budget">
                <span className="edit-toggler">+25%</span>
                <div className="dropdown-box edit-dropdown">
                  <div className="close-dropdown">
                      <span>Edit Multiplier</span>
                      <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  </div>
                  <div className="editable-content">
                    <input type="text" placeholder="100%" />
                  </div>
                  <div className="action-buttons d-flex">
                    <Button variant="transparent">Cancel</Button>
                    <Button className="save-btn ml-auto" variant="transparent">Save</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="click">Clicks</Col>
            <Col className="impressions">Impressions</Col>
            <Col className="ctr">CTR</Col>
            <Col className="avg-cpc">Avg. CPC</Col>
            <Col className="cost">Cost</Col>
            <Col className="avg-pos">Avg. Pos</Col>
            <Col className="showed">Showed</Col>
          </Row>
        </div>
      </Col>
    );
}

export default Contents;