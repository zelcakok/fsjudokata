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
      selTechnique:""
    }
    this.wazaList = [
      {
        wazaName:"第一教 Dai-ikkyo",
        videoId:"6as00smPXRU",
        techniques: [
          {
            name:"突出 Tsuki-dashi",
            seekTo:"00:28",
            end:"01:16"
          },
          {
            name:"肩押 Kata-oshi",
            seekTo:"01:17",
            end:"01:41"
          },
          {
            name:"両手取 Ryote-dori",
            seekTo:"01:41",
            end:"02:12"
          },
          {
            name:"肩廻 Kata-mawashi",
            seekTo:"02:12",
            end:"02:42"
          },
          {
            name:"腮押 Ago-oshi",
            seekTo:"02:42",
            end:"03:13"
          }
        ]
      },
      {
        wazaName:"第二教 Dai-nikyo",
        videoId:"6as00smPXRU",
        techniques: [
          {
            name:"切下 Kiri-oroshi",
            seekTo:"03:13",
            end:"03:54"
          },
          {
            name:"両肩押 Ryokata-oshi",
            seekTo:"03:54",
            end:"04:38"
          },
          {
            name:"斜打 Naname-uchi",
            seekTo:"04:38",
            end:"05:05"
          },
          {
            name:"片手取 Katate-dori",
            seekTo:"05:05",
            end:"05:35"
          },
          {
            name:"片手挙 Katate-age",
            seekTo:"05:35",
            end:"06:05"
          }
        ]
      },
      {
        wazaName:"第三教 Dai-sankyo",
        videoId:"6as00smPXRU",
        techniques: [
          {
            name:"帯取 Obi-tori",
            seekTo:"06:05",
            end:"06:37"
          },
          {
            name:"胸押 Mune-oshi",
            seekTo:"06:37",
            end:"07:10"
          },
          {
            name:"突上 Tsuki-age",
            seekTo:"07:10",
            end:"07:37"
          },
          {
            name:"打下 Uchi-oroshi",
            seekTo:"07:37",
            end:"08:21"
          },
          {
            name:"両眼突 Ryogan-tsuki",
            seekTo:"08:21",
            end:"08:58"
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
    if(this.state.waza<this.wazaList.length-1)
      this.setState({waza:this.state.waza+1, selTechnique:""});
  }

  wazaPrev=()=>{
    if(this.state.waza>0)
      this.setState({waza:this.state.waza-1, selTechnique:""});
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
                            <Select value={this.state.selTechnique}
                                    onChange={this.onChange.bind(this)}
                                    displayEmpty
                                    name="Select">
                                    <MenuItem value="">Please select</MenuItem>
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

class JuNoKata extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("柔の形 Ju-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default JuNoKata;
