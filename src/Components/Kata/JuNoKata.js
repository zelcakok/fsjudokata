import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Ju no kata</div>
    )
  }
}

class JuNoKata extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("柔の形 Ju-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default JuNoKata;
