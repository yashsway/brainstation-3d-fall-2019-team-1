import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from '../src/components/Header/Header';
import Main from './components/Main/Main'



import { Helmet } from 'react-helmet';
import Switch from './components/Switch/Switch';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Digital Futures</title>
      </Helmet>
      <Header />
      <Main />
    </div>
  );
}

export default App;
