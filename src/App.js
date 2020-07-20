import React, {useState} from 'react';
import Sheet from './components/Sheet';
import Toolbar from './components/Toolbar';
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
  var cellTest = [
    {
      type: 'group',
      children: [
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Cell', name: 'Constitution', abbreviation: 'CON', value: 10},
        {type: 'Cell', name: 'Intelligence', abbreviation: 'INT', value: 10},
        {type: 'Cell', name: 'Wisdom', abbreviation: 'WIS', value: 10},
        {type: 'Cell', name: 'Charisma', abbreviation: 'CHA', value: 10},
      ]
    },
    {
      type: 'group',
      children: [
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Cell', height: 2, width: 2, name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', height: 2, width: 2, name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', height: 2, width: 2, name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', height: 2, width: 3, name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
      ]
    },
    {
      type: 'group',
      children: [
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
      ]
    },
    {
      type: 'group',
      children: [
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
        {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
      ]
    }, 
  ]
  let newGroup =     {
    type: 'group',
    children: [
      {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
      {type: 'Cell', name: 'Strength', abbreviation: 'STR', value: 10},
      {type: 'Cell', name: 'Dex', abbreviation: 'DEX', value: 10},
      {type: 'Cell', name: 'Constitution', abbreviation: 'CON', value: 10},
      {type: 'Cell', name: 'Intelligence', abbreviation: 'INT', value: 10},
      {type: 'Cell', name: 'Wisdom', abbreviation: 'WIS', value: 10},
      {type: 'Cell', name: 'Charisma', abbreviation: 'CHA', value: 10},
    ]
  }

  const [sheet, setSheet] = useState(cellTest);

  function addGroup(){
    setSheet(prevSheet => [...prevSheet, newGroup])
    console.log(sheet)
  }
  
  return (
    <div className="App">
      <Toolbar addGroup={addGroup} sheet={sheet} setSheet={setSheet}/>
      <Sheet sheet={sheet}/>
    </div>
  );
}

export default App;
