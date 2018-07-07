import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Kodokan-Goshin-jutsu</div>
    )
  }
}

class Kodokan extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("講道館護身術 Kodokan-Goshin-jutsu");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default Kodokan;
