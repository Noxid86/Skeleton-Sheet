import React from 'react';
import Stat from './Stat';
import Skill from './Skill';
import Throw from './Throw';
import Cell from './Cell';

// set dictionary for component lookup
var components = {
    Stat: Stat,
    Skill: Skill,
    Throw: Throw,
    Cell: Cell
}

function Group(props) {
    // Function for determining the widest child element for the group
    let widestChild = function(){
        let widestChild = 1;
        for(let i = 0 ; i < props.children.length ; i++ ){
            if(props.children[i].width){
                if(props.children[i].width > widestChild){ widestChild = props.children[i].width }
            } 
        }
        return widestChild;
    }

    let childrenHeight = function(){
        let childrenHeight = 0;
        for(let i = 0 ; i < props.children.length ; i++ ){
            if(props.children[i].height){
                childrenHeight += props.children[i].height;
            } else {
                childrenHeight += 1;
            }
        }
        console.log(childrenHeight)
        return childrenHeight;
    }

    let style = {
        display: 'grid',
        gridGap: '0.5rem',
        padding: '0.5rem',
        gridRow: 'span '+childrenHeight(),
        gridColumn: 'span '+widestChild(),
    }

    // render children 
    function renderChildren(children){
        return children.map((child, index)=>{
                const TagName = components[child.type];
                return <TagName key={child.type+'-'+index} {...child}/>
        }); 
    };

    return (
        <div className="group" key={props.label} style={style}>
            {renderChildren(props.children)}
        </div>    
    )
}

export default Group;
