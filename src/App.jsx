import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header';
import Rock from './components/Rock';
import NewRockForm from './components/NewRockForm';
import Routes from './Routes';
import rockStevenson from './assets/rock.png'
import rockStevensonEyes from './assets/rockEyes.png'
import rockStevensonAngry from './assets/rockAngry.png'
import rockStevensonAngryPupils from './assets/rockAngryPupils.png'
import rockStevensonAlive from './assets/rockAlive.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      rockStuff: {
        name: 'Rock Dmitrius Stevenson',
        hunger: 60,
        happiness: 30,
        rest: 90,
        image: rockStevenson
      }
    };
    this.handleAddingNewRock = this.handleAddingNewRock.bind(this);
    this.handlePettingRock = this.handlePettingRock.bind(this)
    this.handleFeedingRock = this.handleFeedingRock.bind(this)
  }

  
  updateRockStats = () => {
    const newRockStuff = {...this.state.rockStuff}
    newRockStuff.happiness += 2;
    newRockStuff.hunger += 2;
    newRockStuff.rest -= 2;
    this.handleRockStats(newRockStuff)
  }
  
  handleDressingRock = () => {
    const newRockStuff = {...this.state.rockStuff};
    newRockStuff.rest += 5;
    this.handleRockStats(newRockStuff)
  }
  
  handleFeedingRock() {
    const newRockStuff = {...this.state.rockStuff };
    newRockStuff.hunger -= 5;
    this.handleRockStats(newRockStuff)
  }
  
  handlePettingRock() {
    const newRockStuff = {...this.state.rockStuff };
    newRockStuff.happiness -= 5;
    newRockStuff.rest -= 5;
    this.handleRockStats(newRockStuff)
  }
  
  handleRockStats = (newRockStuff) => {
    // const newRockStuff = {...this.state.rockStuff };
    if (newRockStuff.hunger < 0 || newRockStuff.hunger > 99 || newRockStuff.happiness < 0 || newRockStuff.happiness > 99 || newRockStuff.rest < 0 || newRockStuff.rest > 99) {
      newRockStuff.image = rockStevensonAlive;
      clearInterval(this.waitTimeUpdateTimer);
    }
    this.setState({ rockStuff: newRockStuff });
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

