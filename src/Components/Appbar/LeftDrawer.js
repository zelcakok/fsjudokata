import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

class KataList extends Component {
  render(){
    return(
      <div style={{width:"250px", paddingLeft:"5px"}}>
        <List>TEST</List>
      </div>
    )
  }
}

class LeftDrawer extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  render(){
    return(
      <Drawer open={this.handler.state.isDrawerOpened}>
        <div
          tabIndex={0}
          role="button"
        >
          <KataList/>
        </div>
      </Drawer>
    )
  }
}

export default LeftDrawer;
