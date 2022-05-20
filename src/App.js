import React, {useState} from 'react';
import Sheet from './components/Sheet';
import Toolbar from './components/Toolbar';
import './App.css';


function App() {
  const [sheet, setSheet] = useState();

  function addGroup(){
    setSheet(prevSheet => [...prevSheet ])
    console.log(sheet)
  }
  
  return (
    <div className="App">
      {/* <Toolbar addGroup={addGroup} sheet={sheet} setSheet={setSheet}/> */}
      <Sheet sheet={sheet}/>
    </div>
  );
}

export default App;
