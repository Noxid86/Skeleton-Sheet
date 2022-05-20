import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { compareArraysAsSet } from '@testing-library/jest-dom/dist/utils';
import Toolbar from './Toolbar';
import Group from './Group';

const elementsFromBackend = [
    { id: uuid(), content: 'First Task' },
    { id: uuid(), content: 'Second Task' },
]
const groupsFromBackend = {
    [uuid()]: {
        height: 2,
        width: 12,
        name: 'Requested',
        elements: [...elementsFromBackend]
    }
}

// const sheet = {
//     group: {
//         title: "Stats",
//         display_options: null, // this will get complicated, but each group will be repositionable
//         contents: [
//             { type: "static_stat", name: "strength", value: 14 },
//             { type: "static_stat", name: "dexterity", value: 12 },
//             { type: "static_stat", name: "constitution", value: 10 },
//         ]

//     }
// }
const onDragEnd = ({ source, destination }, groups, setGroups) => {
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      // Copy the group object the dragged element left
      const sourceGroup = groups[source.droppableId];
      // Copy the group object the dragged element was dropped in
      const destGroup = groups[destination.droppableId];
      // Copy the elements present in the group the dragged element left
      const sourceElements = [...sourceGroup.elements];
      // Copy the elements present in the group the dragged element was dropped in
      const destElements = [...destGroup.elements];
      console.log(source)
      const [removed] = sourceElements.splice(source.index, 1);
      destElements.splice(destination.index, 0, removed);
      setGroups({
        ...groups,
        [source.droppableId]: {
          ...sourceGroup,
          elements: sourceElements
        },
        [destination.droppableId]: {
          ...destGroup,
          elements: destElements
        }
      });
    } else {
      const group = groups[source.droppableId];
      const copiedElements = [...group.elements];
      const [removed] = copiedElements.splice(source.index, 1);
      copiedElements.splice(destination.index, 0, removed);
      setGroups({
        ...groups,
        [source.droppableId]: {
          ...group,
          elements: copiedElements
        }
      });
    }
  };
function Sheet(props) {
    // A Sheet is an array of 'group' objects, each with properties and children.
    // Map each group to it's own group component and pass the group's properties and children as props to that component
    const [groups, setGroups] = useState(groupsFromBackend);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <DragDropContext onDragEnd={result => onDragEnd(result, groups, setGroups)}>
                {Object.entries(groups).map(([id, group]) => {
                    return (
                        <Group id={id} key={id} group={group}/>
                    )
                })}
            </DragDropContext>
        </div>
    );
};

export default Sheet;
