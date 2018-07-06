import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Nage no kata</div>
    )
  }
}

class NageNoKata extends Component {
  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default NageNoKata;
