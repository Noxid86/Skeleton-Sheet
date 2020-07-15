import React from 'react';

function Skill(props) {
    let style = {
        gridColumn : "span 1",
        gridRow : "span 1",
    }
    return (
        <div style={style}>
            <p>This is a Skill</p>
        </div>  
    );
}

export default Skill;
