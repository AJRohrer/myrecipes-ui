import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

//stateless component because it is a function
function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header appName="My Recipes" />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
