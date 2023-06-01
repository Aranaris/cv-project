import React from "react";
import "./styles/App.css"
import Contact from "./components/Contact";
import { Component } from "react";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Contact />
        <Education />
        <Work />
      </div>
    )
  }
  
}

export default App;
