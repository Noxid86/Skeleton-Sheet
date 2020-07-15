import React from 'react';

function Cell(props) {
    let style = {
        gridColumn : "span 1",
        gridRow : "span 1",
    }
    return (
        <div style={style}>
            <p>CELL</p>
        </div>  
    );
}

export default Cell;
