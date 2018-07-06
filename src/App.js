import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Components
import Main from "./Components/Main";
import KataAppbar from "./Components/Appbar/KataAppbar";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <KataAppbar title="Kata Manual"/>
        <Main/>
      </div>
    );
  }
}

export default App;
