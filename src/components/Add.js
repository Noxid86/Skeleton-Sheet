import React from 'react';

function Add(props) {
  var openElement=function(){
    alert('open!')
  }
  return (
    <div className="Add">
        <button onClick={openElement} className="add-button">+</button>
    </div>
  );
}

export default Add;
