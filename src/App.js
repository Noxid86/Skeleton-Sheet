import React from 'react';
import Sheet from './components/Sheet';
import Stat from './components/Stat';
import './App.css';

function App() {
  // A character sheet is represented as an array of group objects
  var testSheet = [
    {
      type: 'group',
      name: 'STATS',
      label: null,
      height: 12,
      width: 2,
      // Which has children, each of which will be rendered into a subcomponent of the sheet
      children: [
        // The 'type' indicates the component that will be rendered and the rest of the values will be passed as props
        {type: 'Stat', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Stat', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Stat', name: 'Constitution', abbreviation: 'CON', value: 10},
        {type: 'Stat', name: 'Intelligence', abbreviation: 'INT', value: 10},
        {type: 'Stat', name: 'Wisdom', abbreviation: 'WIS', value: 10},
        {type: 'Stat', name: 'Charisma', abbreviation: 'CHA', value: 10},
      ]
    }, 
    {
      type: 'group',
      label: 'Saving Throws',
      height: '18',
      width: '3',
      children: [
        {type: 'Skill', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Throw', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Throw', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Throw', name: 'Constitution', abbreviation: 'CON', value: 10},
        {type: 'Throw', name: 'Intelligence', abbreviation: 'INT', value: 10},
        {type: 'Throw', name: 'Wisdom', abbreviation: 'WIS', value: 10},
        {type: 'Throw', name: 'Charisma', abbreviation: 'CHA', value: 10},
      ]
    } 
  ];
  var testSheet2 = [
    {
      type: 'group',
      name: 'STATS',
      label: null,
      height: 12,
      width: 2,
      // Which has children, each of which will be rendered into a subcomponent of the sheet
      children: [
        // The 'type' indicates the component that will be rendered and the rest of the values will be passed as props
        {type: 'Stat', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Stat', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Stat', name: 'Constitution', abbreviation: 'CON', value: 10},
        {type: 'Stat', name: 'Intelligence', abbreviation: 'INT', value: 10},
        {type: 'Stat', name: 'Wisdom', abbreviation: 'WIS', value: 10},
        {type: 'Stat', name: 'Charisma', abbreviation: 'CHA', value: 10},
      ]
    }, 
    {
      type: 'group',
      label: 'Saving Throws',
      height: '18',
      width: '3',
      children: [
        {type: 'Skill', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Throw', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Throw', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Throw', name: 'Constitution', abbreviation: 'CON', value: 10},
        {type: 'Throw', name: 'Intelligence', abbreviation: 'INT', value: 10},
        {type: 'Throw', name: 'Wisdom', abbreviation: 'WIS', value: 10},
        {type: 'Throw', name: 'Charisma', abbreviation: 'CHA', value: 10},
      ]
    } 
  ];


  return (
    <div className="App">
      <Sheet sheet={testSheet}/>
    </div>
  );
}

export default App;
