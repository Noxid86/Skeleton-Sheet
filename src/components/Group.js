import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Element from './Element';


function Group({group, id}) {
    return (
        <div style={{ margin: '8px', display: 'flex', flexDirection: 'column', alignElements: 'center', height: '100%' }}>
            <div ><h1>{group.name}</h1></div>
            <Droppable droppableId={id} key={id}>
                {(provided, snapshot) => {
                    return (
                        <div {...provided.droppableProps} ref={provided.innerRef}
                            style={{
                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                padding: 4,
                                width: 250,
                                minHeight: 500,
                                border: "1px solid black"
                            }}>
                            {group.elements.map(function (element, index) {
                                return <Element element={element} index={index} key={index}/>
                            })}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </div>
    )
}

export default Group;
