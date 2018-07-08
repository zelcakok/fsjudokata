import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Content extends Component {
  render(){
    return (
      <Typography variant="display1" component="h1" style={{textAlign:"center", marginTop:"10%"}}>
        Working on it....
      </Typography>
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
