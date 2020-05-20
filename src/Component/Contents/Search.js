import React from 'react';
import {Col, Button, Form, FormControl } from 'react-bootstrap';

const Search = () => {
    return(
        <Col className="d-flex col-12 col-xl-6 mt-md-5 mt-xl-0">
            <div className="search-wrapper ml-auto d-flex align-items-center">
                <Form inline>
                    <Button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                </Form>
                <Button className="d-none d-md-inline"><i className="fa fa-share-square" aria-hidden="true"></i> Export</Button>
                <Button className="search-close d-md-none">Close</Button>
            </div>
        </Col>
    )
}

export default Search;