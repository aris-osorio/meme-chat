import React,{ useRef, useEffect } from 'react'
import Store from'../redux/store'
import {optionsMessage} from '../redux/actions'
import {deleteMessage} from '../redux/actions'

function useOutsideAlerter(ref, id) {
    useEffect(() => {
        
        function click(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                Store.dispatch(optionsMessage(id, false)) 
            }
        }

        document.addEventListener("mousedown", click);
       
        return () => {

            document.removeEventListener("mousedown", click);
        };
    }, [ref, id]);
}


export default function MessageOptions(props){
       const ref = useRef(null);
       useOutsideAlerter(ref, props.id);

    return(
        <div ref={ref}>
            <div class="dropdown-menu show position-absolute" aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item">Reenviar</p>
                <p class="dropdown-item">Destacar</p>
                <p class="dropdown-item" onClick={()=>Store.dispatch(deleteMessage(props.id))}>Eliminar</p>
            </div>
        </div>
    );
}