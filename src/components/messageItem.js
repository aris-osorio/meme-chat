import React from 'react'
const moment = require('moment');

export default function MessageItem(props)
{   
    return(
        <div className={props.direction}>
            <div className = "bg-white"id={props.id.toString()}>
                <div className="d-flex">
                <div className="container size-space"></div>
                    {props.options}
                </div>
                <p className="mb-0 pb-3 pl-3 pr-3">{props.content}</p>
            </div>
            <div className="d-flex">
                <p className={props.direction +" mb-0"}>{moment(props.date).format('h:mm')}</p>
            </div>
        </div>
    );
}