import React, { useState } from 'react';
import Stat from './Stat';
import Skill from './Skill';
import Throw from './Throw';
import Cell from './Cell';
import './Sheet.css';

// set dictionary for component lookup
var components = {
    Stat: Stat,
    Skill: Skill,
    Throw: Throw,
    Cell: Cell
}

function Sheet(props) {

    // render children 
    function renderChildren(children){
            return children.map((child, index)=>{
                const TagName = components[child.type];
                return <TagName key={index} data={child}/>
        }); 
    };

    let sheet = props.sheet.map((group)=>{
        let style = {
            display: 'grid',
            gridGap: '0.5rem',
            padding: '0.5rem',
            gridTemplateColumns: group.width+'fr',
            gridTemplateRows: group.height+'fr',
            gridRow: 'span '+group.height,
            gridColumn: 'span '+group.width,
        }

        return (
            <div className="group" key={group.label} style={style}>
                {renderChildren(group.children)}
            </div>    
        )})

    return (
        <div className="Sheet">
            {sheet}
        </div>
    );
};

export default Sheet;
