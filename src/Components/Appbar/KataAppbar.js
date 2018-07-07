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
      title: {
        flex: 1,
        cursor: "pointer",
        userSelect:"none"
      },
      menuButton: {
        marginLeft: -15,
      },
    }
    this.handler = props.handler;
    this.state = {
      title: "形 Kata",
    }
  }

  home=()=>()=>{
    window.location = "/";
  }

  changeTitle=(title)=>{
    this.setState({title:title});
  }

  render(){
    return (
      <div style={this.styles.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton style={this.styles.menuButton}
                        color="inherit" aria-label="Menu"
                        onClick={this.handler.toggleDrawer()}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="title"
                        color="inherit"
                        style={this.styles.title}
                        onClick={this.home()}>
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
      title: "形 Kata",
      isDrawerOpened: false
    }
    this.content = React.createRef();
  }

  toggleDrawer=()=>()=>{
    this.setState({isDrawerOpened: !this.state.isDrawerOpened});
  }

  changeTitle=(title)=>{
    this.content.current.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Content title={this.state.title} handler={this} ref={this.content}/>
        <LeftDrawer handler={this}/>
      </div>
    )
  }
}

export default KataAppbar;
