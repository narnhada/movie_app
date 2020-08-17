import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <Navigation />
      <Route path={["/", "/movie_app"]} component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </>
  );
}
export default App;
