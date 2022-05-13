import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import QuienesSomos from './pages/quienes-somos';
import NuestrosServicios from './pages/nuestros-servicios';
import Testimonios from './pages/testimonios';
import Contacto from './pages/datos-de-contacto';
import imageName from './components/img/quirofano.png'

function App(){

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/quienes-somos' component={QuienesSomos}/>
        <Route path='/nuestros-servicios' component={NuestrosServicios}/>
        <Route path='/testimonios' component={Testimonios}/>
        <Route path='/datos-de-contacto' component={Contacto}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;

