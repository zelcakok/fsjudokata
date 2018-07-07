import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import YouTube from 'react-youtube-embed'
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

class Content extends Component {
  constructor(props){
    super(props);
    this.style = {
      item : {
        width: "auto",
        height: "auto",
        minHeight: 200,
        maxHeight: 500,
      }
    }
    this.kataList = [
      {title:"投の形 Nage-no-Kata",videoId:"-Qe_JKQjJTA"},
      {title:"固の形 Katame-no-Kata",videoId:"qS0B7w1yEWM"},
      {title:"極の形 Kime-no-Kata",videoId:"rL1uTmtiZ_s"},
      {title:"柔の形 Ju-no-Kata",videoId:"6as00smPXRU"},
      {title:"講道館護身術 Kodokan Goshin-jutsu",videoId:"t9sV9WUdh6E"},
      {title:"五の形 Itsutsu-no-Kata",videoId:"925Ss8u5QqE"},
      {title:"古式の形 Koshiki-no-Kata",videoId:"lfYtoyS9XOQ"},
    ]
  }

  resize=()=>{
    this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  getXS=()=>{
    var size = window.innerWidth;
    if(size>1000) return 3;
    else if(size>600) return 6;
    return 12;
  }

  render(){

    return (
      <div>
        <Grid container spacing={24}>
        {
          this.kataList.map((item, index)=>{
              return (
                <Grid item xs={this.getXS()} key={item.title}>
                  <Card style={this.style.item}>
                    <CardMedia src={item.videoId}>
                      <YouTube id={item.videoId}/>
                    </CardMedia>
                    <CardContent style={{height:"50px"}}>
                      <Typography variant="subheading" component="h2" style={{textAlign:"left"}}>
                        {item.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color="primary">Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
          })
        }
        </Grid>
      </div>
    )
  }
}

class Main extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
    console.log(this.handler);
  }

  componentDidMount(){
    this.handler.changeTitle("形 Kata");
  }

  render() {
    return (
      <div style={{padding:"10px", overflow:"hidden"}}>
        <Content/>
      </div>
    )
  }
}

export default Main;
