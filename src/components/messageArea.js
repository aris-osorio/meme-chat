import React,{useEffect} from 'react'
import Store from'../redux/store'
import {sendMessage, inputMessage} from '../redux/actions'

function Dispach()
{
    let txt = document.getElementById("input-txt").value.replace(/\s/g, '');
    if(txt.length !== 0){
        Store.dispatch(sendMessage())
    }
}
export default function MessageArea(){

    useEffect(() => {

        function InputCharacters(event) {
      
            if (event.keyCode === 13) 
            {
                Dispach();
            }
        }  

         document.getElementById('input-txt').addEventListener('keydown', InputCharacters)
        
    }, [])

    return(
            <div className="d-flex p-3 shadow-lg">
                <div className="d-flex align-items-center">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-camera fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                        <path fill-rule="evenodd" d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
                <input type="text" className="form-control" id="input-txt" onChange={() =>{Store.dispatch(inputMessage(document.getElementById("input-txt").value))}}  placeholder="Write a response..."></input>
            </div>
    );
}