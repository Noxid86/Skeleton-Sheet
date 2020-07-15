import React from 'react';
import './Toolbar.css';


function Toolbar(props) {
    return (
        <div className='Toolbar'>
            <button>Add Group</button>
            <button>Add Cell</button>
            <p>SELECT ELEMENT</p>
        </div>  
    );
}

export default Toolbar;
