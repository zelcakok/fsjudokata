import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>This area shows 7 katas in grid form.</div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default Main;