import React from 'react'

export default function MessageArea(){
    return(
        <div className="d-flex">
            <input type="text" className="form-control" id="inputTxt"  placeholder="escribir mensaje"></input>
            <button type="button" className="btn btn-primary" id="buttonTxt">Enviar</button>
        </div>
    );
}