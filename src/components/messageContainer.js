import React, {useEffect} from 'react'
import Store from'../redux/store'
import {randomMessage} from '../redux/actions'

export default function MessageContainer(props){

    let html = props.children.map((message)=> {return message}) 
   
    useEffect(() => {

        var elmnt = document.getElementById(props.children.length-1);
        elmnt.scrollIntoView();

        const timer = setTimeout(() => {
            Store.dispatch(randomMessage())
          }, 1000);
          
        return () => clearTimeout(timer);
       
    }, [html.length, props.children.length])

    return(
            <div className="messages color-1">
                <div id="messages-cont">
                    <div className="d-flex flex-column position-relative p-4">{html}</div>
                </div>
            </div>  
    );
}