import React, {useEffect} from 'react'
import Store from'../redux/store'
import {randomMessage} from '../redux/actions'

export default function MessageContainer(props){
    let html = props.children.map((message)=> {return message}) 

    useEffect(() => {

        const timer = setTimeout(() => {
            Store.dispatch(randomMessage())
          }, 1000);
          
          return () => clearTimeout(timer);
       

    }, [html.length])

    return(
        <div className="container">{html}</div>    
    );
}