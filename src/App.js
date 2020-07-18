import React from "react";
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import CounterExample from "./components/CounterExample";
import Footer from "./components/Footer";

//stateless component because it is a function
function App() {
  return (
    <div>
      <Header appName="AJR Investments" />
      <HelloWorld name="Big Nertha" />
      <Footer />
    </div>
  );
}

export default App;
