import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Group from './Group'


function Element({ element, index }) {
    return (
        <Draggable key={element.id} draggableId={element.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '0 0 8px 0',
                            minHeight: '50px',
                            backgroundColor: snapshot.isDragging ? '#263b4a' : '#456C86',
                            color: 'white',
                            ...provided.draggableProps.style
                        }}
                    >
                        {element.content}
                    </div>
                )
            }}
        </Draggable>
    )
}

export default Element;
