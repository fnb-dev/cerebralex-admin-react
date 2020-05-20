import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Contents from './Component/Contents/Contents';
import Row from 'react-bootstrap/Row'

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoA11y = true;


function App() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className={ toggleNav ? "App collapsed" : "App"}>
      <Header setToggleNav={setToggleNav} toggleNav={toggleNav} />
      <Row className="no-gutters">
        <Sidebar setToggleNav={setToggleNav} toggleNav={toggleNav} />
        <Contents />
      </Row>
    </div>
  );
}

export default App;
