import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoA11y = true;


function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
