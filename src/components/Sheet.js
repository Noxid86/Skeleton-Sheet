import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { compareArraysAsSet } from '@testing-library/jest-dom/dist/utils';

// followed tutorial, why seperate these? 
const itemsFromBackend = [
    { id: uuid(), content: 'First Task' },
    { id: uuid(), content: 'Second Task' },
]
const columnsFromBackend = {
    [uuid()]: {
        name: 'Requested',
        items: [...itemsFromBackend]
    },
    [uuid()]: {
        name: 'Todo',
        items: []
    },
    [uuid()]: {
        name: 'In Progress',
        items: []
    },
    [uuid()]: {
        name: 'Complete',
        items: []
    }
}

const sheet = {
    group: {
        title: "Stats",
        display_options: null, // this will get complicated, but each group will be repositionable
        contents: [
            { type: "static_stat", name: "strength", value: 14 },
            { type: "static_stat", name: "dexterity", value: 12 },
            { type: "static_stat", name: "constitution", value: 10 },
        ]

    }
}
const onDragEnd = ({ source, destination }, columns, setColumns) => {
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      // Copy the column object the dragged item left
      const sourceColumn = columns[source.droppableId];
      // Copy the column object the dragged item was dropped in
      const destColumn = columns[destination.droppableId];
      // Copy the items present in the column the dragged item left
      const sourceItems = [...sourceColumn.items];
      // Copy the items present in the column the dragged item was dropped in
      const destItems = [...destColumn.items];
      console.log(source)
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };
function Sheet(props) {
    // A Sheet is an array of 'group' objects, each with properties and children.
    // Map each group to it's own group component and pass the group's properties and children as props to that component
    const [columns, setColumns] = useState(columnsFromBackend);
    const [items, setItems] = useState(itemsFromBackend);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <div style={{ margin: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <h1>{column.name}</h1>
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
                                            {column.items.map(function (item, index) {
                                                return <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                                                {item.content}
                                                            </div>
                                                        )
                                                    }}
                                                </Draggable>
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                    )
                })}
            </DragDropContext>
        </div>
    );
};

export default Sheet;
