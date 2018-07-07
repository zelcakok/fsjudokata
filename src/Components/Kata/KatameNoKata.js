import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      waza:0
    }
    this.wazaList = [
      {
        wazaName:"抑込技 Osaekomi-waza",
        techniques: [
          "袈裟固 Kesa-gatame","肩固 Kata-gatame","上四方固 Kami-shiho-gatame","横四方固 Yoko-shiho-gatame","崩上四方固 Kuzure-kami-shiho-gatame"
        ]
      },
      {
        wazaName:"絞技 Shime-waza",
        techniques: [
          "片十字絞 Kata-juji-shime","裸絞 Hadaka-jime","送襟絞 Okuri-eri-jime","片羽絞 Kataha-jime","逆十字絞 Gyaku-juji-jime"
        ]
      },
      {
        wazaName:"関節技 Kansetsu-waza",
        techniques: [
          "腕緘 Ude-garami","腕挫十字固 Ude-hishigi-juji-gatame","腕挫腕固 Ude-hishigi-ude-gatame","腕挫膝固 Ude-hishigi-hiza-gatame ","足緘 Ashi-garami"
        ]
      },
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

  wazaNext=()=>{
    if(this.state.waza<5)
      this.setState({waza:this.state.waza+1});
  }

  wazaPrev=()=>{
    if(this.state.waza>0)
      this.setState({waza:this.state.waza-1});
  }

  render(){
    return (
      <div>
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
                    <Card style={{margin:"10px"}}>
                      <CardContent>
                        [VIDEO HERE]
                      </CardContent>
                      <CardActions>
                        {
                          window.innerWidth>600?
                            wazaItem.techniques.map((name,i)=>{
                              return(<Button key={i}>{name}</Button>)
                            }) :
                            <Select value={0}>
                              {
                                wazaItem.techniques.map((name,i)=>{
                                  return(<MenuItem value={i}>{name}</MenuItem>)
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
