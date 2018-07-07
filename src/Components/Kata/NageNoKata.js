import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Nage no kata</div>
    )
  }
}

class NageNoKata extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("投の形 Nage-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default NageNoKata;
