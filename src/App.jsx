import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header';
import Rock from './components/Rock';
import NewRockForm from './components/NewRockForm';
import Routes from './Routes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      rockStuff: {
        name: 'Rock Dmitrius Stevenson',
        hunger: 60,
        happiness: 30,
        rest: 300,
      }
    };
    this.handleAddingNewRock = this.handleAddingNewRock.bind(this);
    this.handlePettingRock = this.handlePettingRock.bind(this)
    this.handleFeedingRock = this.handleFeedingRock.bind(this)
  }
  
  // componentDidMount() {
  //   console.log("I'm getting a call. Hold on.");
  //   this.waitTimeUpdateTimer = setInterval(() =>
  //     this.updateRockStats(),
  //      2000);
  // }
  
  updateRockStats = () => {
    const newRockStuff = {...this.state.rockStuff}
    newRockStuff.happiness += 1;
    newRockStuff.hunger += 1;
    newRockStuff.rest -= 1;
    this.setState({ rockStuff: newRockStuff });
  }
  
  handleDressingRock = () => {
    const newRockStuff = {...this.state.rockStuff};
    newRockStuff.rest += 5;
    this.setState({rockStuff: newRockStuff});
  }
  
  handleFeedingRock() {
    const newRockStuff = {...this.state.rockStuff };
    newRockStuff.hunger -= 5;
    this.setState({rockStuff: newRockStuff});
  }
  
  handlePettingRock() {
    const newrockStuff = {...this.state.rockStuff };
    newrockStuff.happiness -= 5;
    this.setState({rockStuff: newrockStuff});
  }
  
  handleAddingNewRock(newName) {
    const newRockStuff = {...this.state.rockStuff }
    newRockStuff.name = newName
    this.setState({formVisibleOnPage: false});
    this.setState({rockStuff: newRockStuff});
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateRockStats(),
       2000);
  }
  
  render(){
    
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewRockForm
                                onNewRockCreation={this.handleAddingNewRock}
                                /> 
    } else {
     currentlyVisibleContent = <Rock rockStuff={this.state.rockStuff}
                                onPettingRock={this.handlePettingRock}
                                onFeedingRock={this.handleFeedingRock}
                                onDressingRock={this.handleDressingRock}
                               />
    }
    return (
      <div>
        <Header />
        {currentlyVisibleContent}
      </div>
    );
  };
}

export default App;

