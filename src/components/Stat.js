import React from 'react';

function Stat(props) {
    let style = {
        gridColumn : "span 1",
        gridRow : "span 1",
    }
    return (
        <div className="Stat" style={style}>
            <p>{props.data.abbreviation}</p>
            <p>{props.data.value}</p>
        </div>
    );
}

export default Stat;
