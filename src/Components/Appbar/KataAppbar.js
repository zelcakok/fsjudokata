import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LeftDrawer from './LeftDrawer';

class Content extends Component {
  constructor(props){
    super(props);
    this.styles = {
      root: {
        flexGrow: 1,
      },
      flex: {
        flex: 1,
      },
      menuButton: {
        marginLeft: -15,
      },
    }
    this.state = {
      title: props.title!=null? props.title : "NULL",
    }
    this.handler = props.handler;
  }

  render(){
    return (
      <div style={this.styles.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton style={this.styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.handler.toggleDrawer()}/>
            </IconButton>
            <Typography variant="title" color="inherit" style={this.styles.flex}>
              {this.state.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

class KataAppbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title!=null? props.title : "NULL",
      isDrawerOpened: false
    }
  }

  toggleDrawer=()=>()=>{
    console.log("Change to true");
    this.setState({isDrawerOpened: true});
  }

  render() {
    return (
      <div>
        <Content title={this.state.title} handler={this}/>
        <LeftDrawer handler={this}/>
      </div>
    )
  }
}

export default KataAppbar;
