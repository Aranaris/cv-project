import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    )
  }
  
}

export default App;
