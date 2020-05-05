import React from 'react';
import './App.css';
import Senators from './data/senators'

function App(props) {
  return (
    <div className="App">
      {Senators.filter(senator => senator.party = 'Republican').map(filteredSenator => (
        <li>
          {filteredSenator.firstname}
        </li>

      ))}
    </div>
  );
}




export default App;
