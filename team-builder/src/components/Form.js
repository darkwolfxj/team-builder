import React from 'react';
import {useState} from 'react';

export default function Form(props){
    console.log(props.addTeam)
    const [mem, setMem] = useState('')
    const handleChanges = e => { console.log(mem);setMem({name: e.target.value})}
    const onSubmit = e => {e.preventDefault(); props.addTeam(mem); setMem({name: ''})}
    return (
        <div>
            <p>Test form</p>
            <form onSubmit={onSubmit}>
                <input onChange={handleChanges} type='text' value={mem.name} />
            </form>
        </div>
    )
}