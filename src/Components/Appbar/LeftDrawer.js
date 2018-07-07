import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ArrowBack from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';

class KataList extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
    this.kataList = [
      {title:"投の形 Nage-no-Kata",nav:"nage"},
      {title:"固の形 Katame-no-Kata",nav:"katame"},
      {title:"極の形 Kime-no-Kata",nav:"kami"},
      {title:"柔の形 Ju-no-Kata",nav:"ju"},
      {title:"講道館護身術 Kodokan Goshin-jutsu",nav:"kodokan"},
      {title:"五の形 Itsutsu-no-Kata",nav:"itsutsu"},
      {title:"古式の形 Koshiki-no-Kata",nav:"koshiki"},
    ]
  }

  navigation=(name)=>()=>{
    switch(name){
      case "nage": {
        window.location = "/投の形-Nage-no-Kata"
        break;
      }
      case "katame": {
        window.location = "/固の形-Katame-no-Kata"
        break;
      }
      case "kami": {
        window.location = "/極の形-Kami-no-Kata"
        break;
      }
      case "ju": {
        window.location = "/柔の形-Ju-no-Kata"
        break;
      }
      case "kodokan": {
        window.location = "/講道館護身術-Kodokan-Goshin-jutsu"
        break;
      }
      case "itsutsu": {
        window.location = "/五の形-Itsutsu-no-Kata"
        break;
      }
      case "koshiki": {
        window.location = "/古式の形-Koshiki-no-Kata"
        break;
      }
    }
  }

  browse=(url)=>()=>{
    window.location = url;
  }

  render(){
    return(
      <div style={{width:"250px"}}>
        <ListItem button onClick={this.handler.toggleDrawer()}>
          <ArrowBack style={{marginRight:"10px"}}/>
          <Typography variant="title" color="inherit">
            關閉 Close
          </Typography>
        </ListItem>
        <Divider/>
        <ListItem>
          <Typography variant="headline" color="inherit">
            形 Kata
          </Typography>
        </ListItem>
        <Divider style={{height:"3px", width:"70%", marginLeft:"10px"}}/>
        {
            this.kataList.map((item, index)=>{
              return (
                <ListItem key={item.title}
                          button
                          className="kataMenuItem"
                          onClick={this.navigation(item.nav)}>
                  <Typography variant="subheading" color="inherit">
                    {item.title}
                  </Typography>
                </ListItem>
              )
            })
        }
        <ListItem style={{marginTop:"30px"}}>
          <Typography variant="headline" color="inherit">
            外部連結 Links
          </Typography>
        </ListItem>
        <Divider style={{height:"3px", width:"70%", marginLeft:"10px"}}/>
        <ListItem button className="kataMenuItem" onClick={this.browse("http://kodokanjudoinstitute.org/")}>
          <LinkIcon style={{marginRight:"10px"}}/>
          <Typography variant="subheading" color="inherit">
            講道館 KODOKAN
          </Typography>
        </ListItem>
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
      <SwipeableDrawer open={this.handler.state.isDrawerOpened}
                       onOpen={this.handler.toggleDrawer()}
                       onClose={this.handler.toggleDrawer()}>
        <div
          tabIndex={0}
          role="button"
        >
          <KataList handler={this.handler}/>
        </div>
      </SwipeableDrawer>
    )
  }
}

export default LeftDrawer;
