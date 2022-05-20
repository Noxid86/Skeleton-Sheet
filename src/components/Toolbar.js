import React from 'react';
import './Toolbar.css';


function Toolbar(props) {

    return (
        <div className='Toolbar' style={{width: '100%', height: "100px", backgroundColor: 'gray'}}>
            <button onClick={function(){console.log('click')}} style={{maxWidth: '100px'}}>Add Group</button>
            <button onClick={function(){console.log('click')}} style={{maxWidth: '100px'}}>Add Element</button>
        </div>  
    );
}

export default Toolbar;
