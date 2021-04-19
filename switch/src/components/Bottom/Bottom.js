import './Bottom.css'
import React from 'react';

function Bottom(props) {
    return (
        <div>
            <button onClick={() => props.switching(true)}>On</button>
            <button onClick ={() => props.switching(false)}>Off</button>
        </div>
    )
}

export default Bottom;