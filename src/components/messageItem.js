import React from 'react'

export default function MessageItem(props)
{    
    return(
        <div className = {props.direction} id={props.id.toString()}>
            <div className="d-flex justify-content-center position-relative">
                <label>{props.date}</label>
                {props.options}
            </div>
            <p>{props.content}</p>   
        </div>
    );
}