import React from 'react';
import './Message.css';

export default ({message,show}) => {
    return (
        <div class="message" style={{display:show?'block':'none'}}>
            {message}
        </div>
    )
}