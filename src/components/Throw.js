import React from 'react';

function Throw(props) {
    let style = {
        gridColumn : "span 1",
        gridRow : "span 1",
    }
    return (
        <div style={style}>
            <p>This is a Throw</p>
        </div>
    );
}

export default Throw;
