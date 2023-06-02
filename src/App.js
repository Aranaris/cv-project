import React from "react";
import "./styles/App.css"
import Contact from "./components/Contact";
import { Component } from "react";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };

    this.setEditMode = this.setEditMode.bind(this);
  }

  setEditMode() {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  render() {
    return (
      <div className="App">
        <Contact editMode={this.state.editMode} setEditMode={this.setEditMode} />
        <Education editMode={this.state.editMode} setEditMode={this.setEditMode}/>
        <Work />
        <button onClick={this.setEditMode}>Edit</button>
      </div>
    )
  }
  
}

export default App;
