import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Content extends Component {
  render(){
    return (
      <div>
        <Typography variant="display1" component="h1" style={{textAlign:"center", marginTop:"10%"}}>
          Working on it....
        </Typography>
      </div>
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
