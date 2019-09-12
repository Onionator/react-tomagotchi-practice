import React from 'react';

function Header(){
  let headerStyle ={
    textAlign: 'center',
  };
  return (
    <div style={headerStyle}>
      <h1>Rockagotchi</h1>
      <hr />
    </div>
  );
}

export default Header;