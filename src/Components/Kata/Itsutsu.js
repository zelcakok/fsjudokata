import React, { Component } from 'react';

class Content extends Component {
  render(){
    return (
      <div>Itsutsu no kata</div>
    )
  }
}

class Itsutsu extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("五の形 Itsutsu-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default Itsutsu;
