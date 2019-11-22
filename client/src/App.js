import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Helmet } from 'react-helmet';
import Switch from './components/Switch/Switch';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Brainstation 3D Starter</h2>
        <h3>Shambles Squad</h3>

      </header> */}
      <Switch />
    </div>
  );
}

export default App;
