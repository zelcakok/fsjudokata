import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Itsutsu no kata</div>
    )
  }
}

class Koshiki extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("古式の形 Koshiki-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default Koshiki;
