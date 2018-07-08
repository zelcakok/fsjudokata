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
import FormControl from '@material-ui/core/FormControl';

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
        wazaName:"手技 Te-waza",
        videoId:"-Qe_JKQjJTA",
        techniques: [
          {
            name:"浮落 Uki-otoshi",
            seekTo:"00:42",
            end:"01:05"
          },
          {
            name:"背負投 Seoi-nage",
            seekTo:"01:05",
            end:"01:20"
          },
          {
            name:"肩車 Kata-guruma",
            seekTo:"01:20",
            end:"01:45"
          }
        ]
      },
      {
        wazaName:"腰技 Koshi-waza",
        videoId:"-Qe_JKQjJTA",
        techniques: [
          {
            name:"浮腰 Uki-goshi",
            seekTo:"01:50",
            end:"02:08"
          },
          {
            name:"払腰 Harai-goshi",
            seekTo:"02:08",
            end:"02:28"
          },
          {
            name:"釣込腰 Tsurikomi-goshi",
            seekTo:"02:28",
            end:"02:52"
          }
        ]
      },
      {
        wazaName:"足技 Ashi-waza",
        videoId:"-Qe_JKQjJTA",
        techniques: [
          {
            name:"送足払 Okuri-ashi-harai",
            seekTo:"02:57",
            end:"03:20"
          },
          {
            name:"支釣込足 Sasae-tsurikomi-ashi",
            seekTo:"03:20",
            end:"03:40"
          },
          {
            name:"内股 Uchi-mata",
            seekTo:"03:40",
            end:"04:06"
          }
        ]
      },
      {
        wazaName:"真捨身技 Ma-sutemi-waza",
        videoId:"-Qe_JKQjJTA",
        techniques: [
          {
            name:"巴投 Tomoe-nage",
            seekTo:"04:10",
            end:"04:32"
          },
          {
            name:"裏投 Ura-nage",
            seekTo:"04:32",
            end:"04:50"
          },
          {
            name:"隅返 Sumi-gaeshi",
            seekTo:"04:50",
            end:"05:15"
          }
        ]
      },
      {
        wazaName:"横捨身技 Yoko-sutemi-waza",
        videoId:"-Qe_JKQjJTA",
        techniques: [
          {
            name:"横掛 Yoko-gake",
            seekTo:"05:20",
            end:"05:46"
          },
          {
            name:"横車 Yoko-guruma",
            seekTo:"05:46",
            end:"06:09"
          },
          {
            name:"浮技 Uki-waza",
            seekTo:"06:09",
            end:"06:35"
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
    this.players[this.state.waza].current.playerInstance.loadVideoById({
      videoId:videoId, startSeconds:this.seekTo(from), endSeconds:this.seekTo(to)
    });
  }

  onChange(e){
    if(e.target.value.length < 1) return;
    this.setState({selTechnique:e.target.value}, ()=>{
      var videoId = this.wazaList[this.state.waza].videoId;
      var tech = this.wazaList[this.state.waza].techniques[e.target.value];
      this.seek(videoId, tech.seekTo, tech.end);
    });    
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
                            <FormControl>
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
                            </FormControl>
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

class NageNoKata extends Component {
  constructor(props){
    super(props);
    this.handler = props.handler;
  }

  componentDidMount(){
    this.handler.changeTitle("投の形 Nage-no-Kata");
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <Content/>
      </div>
    )
  }
}

export default NageNoKata;
