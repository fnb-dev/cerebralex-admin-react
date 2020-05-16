import React, {useState} from 'react';
import {Row, Col, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Scrollbars } from "react-custom-scrollbars";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Contents = () => {
    const [startDate, setStartDate] = useState(new Date("2020/01/09"));
    const [endDate, setEndDate] = useState(new Date("2020/01/24"));
    console.log(startDate);
    return (
      <Col className="content-wrap p-4 bg-black text-white">
        <Row>
          <Col className="content-title">
            <h3>Campaigns View</h3>
          </Col>
          <Col className="date-picker-col d-flex">
            <div className="datepicker-wrap ml-auto">
              <div className="datepicker-toggler">
                <p>Yesterday: 09 Jan 2020 - 24 Jan 2020</p>
                <span>vs. 10 Jan - 10 Jan</span>
              </div>
              <div className="datepicker-tab-wrap">
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                >
                  <Tab eventKey="home" title="Presets">
                    <Form>
                      <Scrollbars style={{ width: 320, height: 425 }}>
                        <Form.Group>
                          <Form.Check
                            type="radio"
                            label="Today"
                            name="presets"
                            id="today"
                          />
                          <Form.Check
                            type="radio"
                            label="Yesterday"
                            name="presets"
                            id="yesterday"
                          />
                          <Form.Check
                            type="radio"
                            label="Last 30 Days"
                            name="presets"
                            id="last30Days"
                          />
                          <Form.Check
                            type="radio"
                            label="This Month"
                            name="presets"
                            id="thisMonth"
                          />
                          <Form.Check
                            type="radio"
                            label="Last Month"
                            name="presets"
                            id="lastMonth"
                          />
                          <Form.Check
                            type="radio"
                            label="Last 30 Days"
                            name="presets"
                            id="last30Days2"
                          />
                          <Form.Check
                            type="radio"
                            label="This Month"
                            name="presets"
                            id="thisMonth2"
                          />
                          <Form.Check
                            type="radio"
                            label="Last Month"
                            name="presets"
                            id="lastMonth2"
                          />
                          <Form.Check
                            type="radio"
                            label="Last 30 Days"
                            name="presets"
                            id="last30Days3"
                          />
                          <Form.Check
                            type="radio"
                            label="This Month"
                            name="presets"
                            id="thisMonth3"
                          />
                          <Form.Check
                            type="radio"
                            label="Last Month"
                            name="presets"
                            id="lastMonth3"
                          />
                        </Form.Group>
                      </Scrollbars>
                      <Form.Group className="button-row text-center">
                        <Col>
                          <Button type="submit">Done</Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Tab>
                  <Tab
                    className="datepicker-contents"
                    eventKey="profile"
                    title="Custom Range"
                  >
                    <Row className="no-gutters action-row">
                      <p>09/01/2020 - 09/01/2020</p>
                      <Form.Check
                        className="ml-auto"
                        type="switch"
                        id="custom-switch"
                        label="Compare"
                      />
                    </Row>
                    <Row className="no-gutters datepicker-row">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        inline
                        startDate={startDate}
                        endDate={endDate}
                        //monthsShown={2}
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        inline
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                      />
                    </Row>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    );
}

export default Contents;