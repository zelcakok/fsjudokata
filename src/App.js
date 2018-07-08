import React, { Component } from 'react';
import './App.css';

//Import Components
import KataAppbar from "./Components/Appbar/KataAppbar";
import Main from "./Components/Main";
import NageNoKata from "./Components/Kata/NageNoKata";
import KatameNoKata from "./Components/Kata/KatameNoKata";
import KimeNoKata from "./Components/Kata/KimeNoKata";
import JuNoKata from "./Components/Kata/JuNoKata";
import Kodokan from "./Components/Kata/Kodokan";
import Itsutsu from "./Components/Kata/Itsutsu";
import Koshiki from "./Components/Kata/Koshiki";

import ErrorPage from './Components/ErrorPage';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.appBar = React.createRef();
  }

  browse=(url)=>()=>{
    window.location = url;
  }

  changeTitle=(title)=>{
    this.appBar.current.changeTitle(title);
  }

  render() {
    return (
      <div className="App">
        <KataAppbar ref={this.appBar}/>
        <Router>
          <Switch>
            <Route exact path="/" render={()=><Main handler={this}/>}/>
            <Route exact path="/投の形-Nage-no-Kata" render={()=><NageNoKata handler={this}/>}/>
            <Route exact path="/固の形-Katame-no-Kata" render={()=><KatameNoKata handler={this}/>}/>
            <Route exact path="/極の形-Kime-no-Kata" render={()=><KimeNoKata handler={this}/>}/>
            <Route exact path="/柔の形-Ju-no-Kata" render={()=><JuNoKata handler={this}/>}/>
            <Route exact path="/講道館護身術-Kodokan-Goshin-jutsu" render={()=><Kodokan handler={this}/>}/>
            <Route exact path="/五の形-Itsutsu-no-Kata" render={()=><Itsutsu handler={this}/>}/>
            <Route exact path="/古式の形-Koshiki-no-Kata" render={()=><Koshiki handler={this}/>}/>
            <Route component={ErrorPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
