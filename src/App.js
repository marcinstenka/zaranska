import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import SimpleReactLightbox from 'simple-react-lightbox'

import Natalia from './components/pages/Natalia'
import About from './components/pages/About';
import Offer from './components/pages/Offer';
import Contact from './components/pages/Contact'
function App() {
  AOS.init({
    offset: 160
  });
  return (
    <SimpleReactLightbox>
    <BrowserRouter basename='/zaranska/'>
      <Switch>
        <Route exact path='/' component={Natalia} />
        <Route exact path='/o-mnie' component={About} />
        <Route exact path='/oferta' component={Offer} />
        <Route exact path='/kontakt' component={Contact} />
      </Switch>
    </BrowserRouter>
    </SimpleReactLightbox>
  )
}

export default App;
