import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Natalia from './components/pages/Natalia'
import About from './components/pages/About';
import Offert from './components/pages/Offert';
import Contact from './components/pages/Contact'
function App() {
  return (
    <BrowserRouter basename='/zaranska/'>
      <Switch>
        <Route exact path='/' component={Natalia} />
        <Route exact path='/o-mnie' component={About} />
        <Route exact path='/oferta' component={Offert} />
        <Route exact path='/kontakt' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
