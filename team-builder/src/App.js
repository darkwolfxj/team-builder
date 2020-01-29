import React from 'react';
import {useState} from 'react';

import {team} from './team';
import TeamList from './components/TeamList';
import Form from './components/Form';


function App() {
    const [Team, setTeam] = useState(team);
    const addTeam = (newMem) => {
        setTeam([...Team, newMem])
    }
  return (
    <>
    <h1>My Team List</h1>
    <Form addTeam={addTeam}/>
    <TeamList team={Team}/>
    </>
  );
}

export default App;
