import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from './route/About'
import Home from "./route/Home";
import Navigation from './compo/Navigation'
import Detail from './route/Detail'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  );
}

export default App;
