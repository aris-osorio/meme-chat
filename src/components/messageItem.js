import React from 'react'
const moment = require('moment');

export default function MessageItem(props)
{   
    let items ="justify-content-start"
    let bg = "bg-white"
    let start_color = ""
    
    if(props.highlight === true)
    {
        start_color="color-6-txt"
    }

    let element1 = (
                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className={start_color+" bi bi-star-fill"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                   )

    let element2 =(<p className="mb-0 pl-1">{moment(props.date).format('h:mm A')}</p> )               
   

    if(props.direction ==="align-self-end")
    {
        items = "justify-content-end"
        bg ="bg-user"

        element2 = element1
        element1 = (<p className="mb-0 pr-1 ">{moment(props.date).format('h:mm A')}</p>)
    }

    if(props.content === "Este mensaje ha sido eliminado")
    {
        element1=""
        element2=""
    }

    return(
        <div className={props.direction+" pb-5 "} id={props.id.toString()}>
            <div className = {bg+" shadow rounded mw-100 pointer"} >
               <div className="d-flex justify-content-end">
                   {props.options}
                </div>
                <p className="mb-0 p-3 txt-message text-justify">{props.content}</p>
            </div>
            <div className={items +" d-flex color-4-txt align-items-center pt-1"}>       
                {element1}
                {element2}       
            </div>
        </div>
    );
}