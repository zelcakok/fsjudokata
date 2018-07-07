import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Kime no kata</div>
    )
  }
}

class KimeNoKata extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("極の形 Kime-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default KimeNoKata;
