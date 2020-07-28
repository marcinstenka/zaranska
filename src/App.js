import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Natalia from './components/pages/Natalia'
import Contact from './components/pages/Contact'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Natalia} />
        <Route exact path='/kontakt' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
