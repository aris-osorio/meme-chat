import React,{ useRef, useEffect } from 'react'
import Store from'../redux/store'
import {optionsMessage} from '../redux/actions'

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
            <p className="mb-0">opciones</p>
        </div>
    );
}