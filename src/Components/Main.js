import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>[CONTENT]</div>
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
