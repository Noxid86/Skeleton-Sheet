import React from 'react';

function Cell(props) {
    let style = {
        gridColumn : "span 1",
        gridRow : "span 1",
    }
    
    if(props.height){ style.gridRow = "span "+props.height };
    if(props.width){ style.gridColumn = "span "+props.width };
    
    return (
        <div style={style}>
            <p>CELL</p>
        </div>  
    );
}

export default Cell;
