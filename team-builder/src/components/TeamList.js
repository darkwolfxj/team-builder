import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    justify-content: center;
`

export default function TeamList(props){
    return (
        <>
            <Div>
                <div>
                {props.team.map(mem => <p key={Math.random()}>{mem.name}</p>)}
                </div>
            </Div>
        </>
    )
}