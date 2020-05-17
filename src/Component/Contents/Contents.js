import React, {useState} from 'react';
import {Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { Scrollbars } from "react-custom-scrollbars";
import Datepicker from './Datepicker';

const Contents = () => {
    const [dropdownToggler, setDropdownToggler] = useState(false)
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
            <div className="filter-wrapper border-left ml-4 pl-4">
              <div className="filter-content position-relative">
                <Button variant="outline-white"><i className="fa fa-filter" aria-hidden="true"></i> Add Filter</Button>
                <div className="filter-dropdown position-absolute">
                  <div className="close-filter-dropdown">
                    <Button variant="transparent"><i className="fa fa-times" aria-hidden="true"></i></Button>
                  < /div>
                  <Scrollbars style={{ width: 320, height: 477 }}>
                    <Form>
                        <Form.Group className={dropdownToggler ? "checkbox show" : "checkbox"}>
                          <Form.Label className="d-flex" as="legend" column sm={12}>
                            <span>Status</span>
                            <span className="toggle-icon ml-auto" onClick={() => setDropdownToggler(!dropdownToggler)}><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
                          </Form.Label>
                          {
                            dropdownToggler ?
                            <Col sm={12}>
                              <Form.Check
                                type="radio"
                                label="Active"
                                name="status"
                                id="active"
                              />
                              <Form.Check
                                type="radio"
                                label="Pause"
                                name="status"
                                id="pause"
                              />
                              <Form.Check
                                type="radio"
                                label="Archive"
                                name="status"
                                id="archive"
                              />
                            </Col>
                            : ""
                          }
                        </Form.Group>
                    </Form>
                  </Scrollbars>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex">
            <div className="search-wrapper ml-auto d-flex">
              <Form inline>
                <Button><i className="fa fa-search" aria-hidden="true"></i></Button>
                <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
              </Form>
              <Button><i className="fa fa-share-square" aria-hidden="true"></i> Export</Button>
            </div>
          </Col>
        </Row>
      </Col>
    );
}

export default Contents;