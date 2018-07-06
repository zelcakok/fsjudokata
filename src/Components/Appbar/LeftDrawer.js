import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ArrowBack from '@material-ui/icons/ArrowBack';
import LinkIcon from '@material-ui/icons/Link';

class KataList extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  navigation=(name)=>()=>{
    //Routing

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
        <ListItem button className="kataMenuItem" onClick={this.navigation("nage")}>
          <Typography variant="subheading" color="inherit">
            投の形 Nage-no-Kata
          </Typography>
        </ListItem>
        <ListItem button className="kataMenuItem" onClick={this.navigation("katame")}>
          <Typography variant="subheading" color="inherit">
            固の形 Katame-no-Kata
          </Typography>
        </ListItem>
        <ListItem button className="kataMenuItem" onClick={this.navigation("kami")}>
          <Typography variant="subheading" color="inherit">
            極の形 Kime-no-Kata
          </Typography>
        </ListItem>
        <ListItem button className="kataMenuItem" onClick={this.navigation("ju")}>
          <Typography variant="subheading" color="inherit">
            柔の形 Ju-no-Kata
          </Typography>
        </ListItem>
        <ListItem button className="kataMenuItem" onClick={this.navigation("kodokan")}>
          <Typography variant="subheading" color="inherit">
            講道館護身術 Kodokan Goshin-jutsu
          </Typography>
        </ListItem>
        <ListItem button className="kataMenuItem" onClick={this.navigation("itsutsu")}>
          <Typography variant="subheading" color="inherit">
            五の形 Itsutsu-no-Kata
          </Typography>
        </ListItem>
        <ListItem button className="kataMenuItem" onClick={this.navigation("koshiki")}>
          <Typography variant="subheading" color="inherit">
            古式の形 Koshiki-no-Kata
          </Typography>
        </ListItem>
        <ListItem>
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
      <Drawer open={this.handler.state.isDrawerOpened} onClose={this.handler.toggleDrawer()}>
        <div
          tabIndex={0}
          role="button"
        >
          <KataList handler={this.handler}/>
        </div>
      </Drawer>
    )
  }
}

export default LeftDrawer;
