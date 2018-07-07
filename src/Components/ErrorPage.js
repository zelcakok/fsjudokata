import React, {Component} from 'react';
import errPic from './Images/404.jpg';

class ErrorPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      picSize:((window.innerHeight*0.8) + "px"),
    }
  }

  resize=()=>{
    this.setState({picSize: ((window.innerHeight) + "px")});
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  credit=(url)=>()=>{
    window.location = url;
  }

  render(){
    return (
      <div style={{padding:"10px"}}>
        <img style={{width: this.state.picSize, height: this.state.picSize}} src={errPic}/>
      </div>
    )
  }
}

export default ErrorPage;
