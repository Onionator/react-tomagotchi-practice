import React from 'react'
import PropTypes from 'prop-types';
import rockStevenson from '../assets/rockStevenson.png'


function Rock(props) {
  const careNot = {
      textAlign: "center",
      backgroundColor: "red",
  }
  return(
    <div style={careNot}>
      <div >
        <img alt="It's a Rock" src={rockStevenson} />
      </div>
      <h1>Name: {props.rockStuff.name}</h1>
      <h2>Hunger: {props.rockStuff.hunger}</h2>
      <h2>Happiness: {props.rockStuff.happiness}</h2>
      <h2>Rest: {props.rockStuff.rest}</h2>
      <div>
        <button onClick={() => props.onPettingRock()}>Pet</button>
        <button onClick={() => props.onFeedingRock()}>Feed</button>
        <button onClick={() => props.onDressingRock()}>Rest</button>
      </div>
    </div>
  );
}

Rock.propTypes = {
  name: PropTypes.string,
  hunger: PropTypes.number,
  happiness: PropTypes.number,
  rest: PropTypes.number,
  onPettingRock: PropTypes.func,
  onFeddingRock: PropTypes.func,
  onDressingRock: PropTypes.func
};

export default Rock;