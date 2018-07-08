import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import LeftDrawer from './LeftDrawer';

class Content extends Component {
  constructor(props){
    super(props);
    this.styles = {
      root: {
        flexGrow: 1,
      },
      title: {
        cursor: "pointer",
        userSelect:"none",
        width:"fit-content",
        margin:"auto",
        float:"none"
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
            <Tooltip title="Home">
              <IconButton style={this.styles.menuButton}
                          color="inherit" aria-label="Menu"
                          onClick={this.home()}>
                <HomeIcon/>
              </IconButton>
            </Tooltip>
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
