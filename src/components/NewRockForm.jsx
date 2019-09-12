import React from 'react'
import PropTypes from 'prop-types';

function NewRockForm(props) {
  let _name = null;
  
  function handleNewRockFormSubmission(event) {
    event.preventDefault();
    props.onNewRockCreation(_name.value)
    _name.value = '';
  }
  
  return(
    <div>
      <form onSubmit={handleNewRockFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Rock Name'
          ref={(input) => {_name = input;}}
        />
        <button type='submit'>Name my Rock!</button>
      </form>
    </div>
  );
}  


NewRockForm.propTypes = {
  onNewRockCreation: PropTypes.func
};

export default NewRockForm;