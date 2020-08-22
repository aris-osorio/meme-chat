import React from 'react'

export default function MessageItem(props)
{
    console.log("entro a item")
    return(
        <div className="container">
            <label>{props.date}</label>
            <p>{props.content}</p>
        </div>
    );
}