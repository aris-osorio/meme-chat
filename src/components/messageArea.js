import React from 'react'
import Store from'../redux/store'
import {sendMessage} from '../redux/actions'

export default function MessageArea(){
    return(
        <div className="d-flex">
            <input type="text" className="form-control" id="inputTxt"  placeholder="escribir mensaje"></input>
            <button type="button" className="btn btn-primary" id="buttonTxt" onClick={() => Store.dispatch(sendMessage())}>Enviar</button>
        </div>
    );
}