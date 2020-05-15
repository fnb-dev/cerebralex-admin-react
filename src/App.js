import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Contents from './Component/Contents/Contents';

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoA11y = true;


function App() {
  return (
    <div className="App">
      <Header />
      <div className="row no-gutters">
        <Sidebar />
        <Contents />
      </div>
    </div>
  );
}

export default App;
