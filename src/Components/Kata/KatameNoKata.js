import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import YouTube from '@u-wave/react-youtube';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      waza:0,
      seekTo:0,
      end:0,
      selTechnique:0
    }
    this.wazaList = [
      {
        wazaName:"抑込技 Osaekomi-waza",
        videoId:"qS0B7w1yEWM",
        techniques: [
          {
            name:"袈裟固 Kesa-gatame",
            seekTo:"00:45",
            end:"01:31"
          },
          {
            name:"肩固 Kata-gatame",
            seekTo:"01:31",
            end:"02:03"
          },
          {
            name:"上四方固 Kami-shiho-gatame",
            seekTo:"02:03",
            end:"02:54"
          },
          {
            name:"横四方固 Yoko-shiho-gatame",
            seekTo:"02:54",
            end:"03:49"
          },
          {
            name:"崩上四方固 Kuzure-kami-shiho-gatame",
            seekTo:"03:49",
            end:"04:41"
          }
        ]
      },
      {
        wazaName:"絞技 Shime-waza",
        videoId:"qS0B7w1yEWM",
        techniques: [
          {
            name:"片十字絞 Kata-juji-shime",
            seekTo:"05:00",
            end:"05:37"
          },
          {
            name:"裸絞 Hadaka-jime",
            seekTo:"05:37",
            end:"06:09"
          },
          {
            name:"送襟絞 Okuri-eri-jime",
            seekTo:"06:09",
            end:"06:21"
          },
          {
            name:"片羽絞 Kataha-jime",
            seekTo:"06:21",
            end:"06:34"
          },
          {
            name:"逆十字絞 Gyaku-juji-jime",
            seekTo:"06:34",
            end:"07:19"
          }
        ]
      },
      {
        wazaName:"関節技 Kansetsu-waza",
        videoId:"qS0B7w1yEWM",
        techniques: [
          {
            name:"腕緘 Ude-garami",
            seekTo:"07:48",
            end:"08:20"
          },
          {
            name:"腕挫十字固 Ude-hishigi-juji-gatame",
            seekTo:"08:20",
            end:"08:35"
          },
          {
            name:"腕挫腕固 Ude-hishigi-ude-gatame",
            seekTo:"08:35",
            end:"08:54"
          },
          {
            name:"腕挫膝固 Ude-hishigi-hiza-gatame",
            seekTo:"08:54",
            end:"09:22"
          },
          {
            name:"足緘 Ashi-garami",
            seekTo:"09:22",
            end:"09:38"
          }
        ]
      },
    ]
    this.players = [];
    for(var i=0; i<this.wazaList.length; i++) this.players[i] = React.createRef();
  }

  resize=()=>{
    this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  wazaNext=()=>{
    if(this.state.waza<5)
      this.setState({waza:this.state.waza+1});
  }

  wazaPrev=()=>{
    if(this.state.waza>0)
      this.setState({waza:this.state.waza-1});
  }

  seekTo=(time)=>{
    var value = time.split(":");
    var minute = parseInt(value[0]*60,10);
    var second = parseInt(value[1],10);
    return parseInt(minute+second,10);
  }

  getSize=()=>{
    var height=0;
    var width=0;
    if(window.innerWidth>600){
      height = window.innerHeight * 0.4;
      width = height*16/9;
    } else {
      width = "auto"
      height = "auto"
    }
    return {height:height, width:width};
  }

  seek=(videoId, from, to)=>{
    console.log(this.players[this.state.waza].current);
    this.players[this.state.waza].current.playerInstance.loadVideoById({
      videoId:videoId, startSeconds:this.seekTo(from), endSeconds:this.seekTo(to)
    });
  }

  onChange(e){
    var videoId = this.wazaList[this.state.waza].videoId;
    var tech = this.wazaList[this.state.waza].techniques[e.target.value];
    this.seek(videoId, tech.seekTo, tech.end);
  }

  render(){
    return (
      <div style={{maxWidth:"1000px", float:"none", margin:"auto"}}>
        <Stepper activeStep={this.state.waza} orientation="vertical">

          {
            this.wazaList.map((wazaItem, index)=>{
              return(
                <Step key={index}>
                  <StepLabel>
                    <Typography variant="headline" component="h2">
                      {wazaItem.wazaName}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Card style={{margin:"1px"}}>
                      <CardMedia src="null">
                        <YouTube video={wazaItem.videoId}
                                 autoplay={false}
                                 ref={this.players[index]}
                                 className="player"
                                 width={this.getSize().width}
                                 height={this.getSize().height}
                                 startSeconds={this.state.seekTo}
                                 endSeconds={this.state.end}
                                 modestBranding={true}
                                 showRelatedVideos={false}
                                 showInfo={false}
                                 annotations={false}/>
                      </CardMedia>
                      <CardActions>
                        {
                          window.innerWidth>600?
                            wazaItem.techniques.map((techniques,i)=>{
                              return(
                                <Button key={i}
                                        onClick={()=>this.seek(wazaItem.videoId, techniques.seekTo, techniques.end)}>
                                  {techniques.name}
                                </Button>
                              )
                            }) :
                            <Select value={this.state.selTechnique} onChange={this.onChange.bind(this)}>
                              {
                                wazaItem.techniques.map((techniques,i)=>{
                                  return(
                                    <MenuItem value={i} key={i}>
                                        {techniques.name}
                                    </MenuItem>
                                  )
                                })
                              }
                            </Select>
                        }
                      </CardActions>
                    </Card>
                  </StepContent>
                </Step>
              )
            })
          }
        </Stepper>
        <Button color="secondary" onClick={this.wazaPrev}>Previous</Button>
        <Button color="secondary" onClick={this.wazaNext}>NEXT</Button>
      </div>
    )
  }
}

class KatameNoKata extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("固の形 Katame-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default KatameNoKata;
