import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent.js";

class App extends Component {
  state = {
    input: [],
  };

  index = null;

  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value.split(""),
    });
  };

  charComponentClick = (index) => {
    const newLetters = [...this.state.input];
    newLetters.splice(index, 1);
    this.setState({ input: newLetters });
  };

  render() {
    const inputField = (
      <input className="myInput" onChange={this.inputChangeHandler}></input>
    );

    const letters = this.state.input;
    let CharComponentsList = [];
    if (letters.length > 0) {
      CharComponentsList = letters.map((letter, index) => {
        return (
          <CharComponent
            letter={letter}
            index={index}
            click={this.charComponentClick.bind(this, index)}
          />
        );
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {inputField}
        <p className="App-intro">Input length: {this.state.input.length}</p>
        <ValidationComponent length={this.state.input.length} />
        {CharComponentsList}
      </div>
    );
  }
}

export default App;
