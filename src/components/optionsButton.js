import React from 'react';
import Store from'../redux/store'
import {optionsMessage} from '../redux/actions'

export default function OptionsButton(props){
    let color = "options-button"
    
    if(props.author === "USER_CHAT")
    {
        color = "options-button2"
    }
    
    return(
        <svg  width="1.3em" height="1.3em" viewBox="0 0 16 16" className={color+" position-absolute pt-1 pr-1 bi bi-chevron-down"}  onClick={() => Store.dispatch(optionsMessage(props.id , true))} fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
    );
}
