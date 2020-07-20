import React from 'react';
import Group from './Group';
import './Sheet.css';

function Sheet(props) {
    // A Sheet is an array of 'group' objects, each with properties and children.
    // Map each group to it's own group component and pass the group's properties and children as props to that component
    console.log('BOOM', props.sheet)
    let sheet = props.sheet.map((group, index)=>{
        // Render each group and pass data within the group as props to that group
        return <Group key={'Group'+index} {...props.sheet[index]}/>
    })

    return (
        <div className="Sheet">
            {sheet}
        </div>
    );
};

export default Sheet;
