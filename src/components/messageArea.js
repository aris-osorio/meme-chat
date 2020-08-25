import React from 'react'
import Store from'../redux/store'
import {sendMessage, inputMessage} from '../redux/actions'

export default function MessageArea(){
    return(
            <div className="d-flex p-3">
                <input type="text" className="form-control" id="input-txt" onChange={() =>{Store.dispatch(inputMessage(document.getElementById("input-txt").value))}}  placeholder="escribir mensaje"></input>
                <button type="button" className="btn btn-primary" id="buttonTxt" onClick={() =>{let input = document.getElementById("input-txt").value.replace(/\s/g, '');if(input.length !== 0){Store.dispatch(sendMessage())}}}>Enviar</button>
            </div>
    );
}