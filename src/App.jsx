import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/router/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App