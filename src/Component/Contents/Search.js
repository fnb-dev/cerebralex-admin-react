import React from 'react';
import {Row, Col, Button, Form, FormControl } from 'react-bootstrap';

const Search = () => {
    return(
        <Col className="d-flex">
            <div className="search-wrapper ml-auto d-flex">
                <Form inline>
                    <Button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                </Form>
                <Button><i className="fa fa-share-square" aria-hidden="true"></i> Export</Button>
            </div>
        </Col>
    )
}

export default Search;