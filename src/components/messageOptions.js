import React, { useRef, useEffect } from 'react'
import Store from '../redux/store'
import { optionsMessage, deleteMessage, resendMessage, highlightMessage } from '../redux/actions'

function useOutsideAlerter(ref, id) {
    useEffect(() => {

        function click(event) {
            if (!ref.current.contains(event.target)) {
                Store.dispatch(optionsMessage(id, false))
            }
        }

        document.addEventListener("mousedown", click);

        return () => {

            document.removeEventListener("mousedown", click);
        };
    }, [ref, id]);
}


export default function MessageOptions(props) {

    const ref = useRef(null);
    useOutsideAlerter(ref, props.id);

    let highlight = (<p className="dropdown-item" onClick={() => Store.dispatch(highlightMessage(props.id, true))}>Marcar</p>)

    if (props.show === true) {
        highlight = (<p className="dropdown-item" onClick={() => Store.dispatch(highlightMessage(props.id, false))}>Desmarcar</p>)
    }

    return (
        <div ref={ref} className= "shadow position-absolute bg-white" aria-labelledby="dropdownMenuButton">
            <p className="dropdown-item" onClick={() => Store.dispatch(resendMessage(props.id))}>Reenviar</p>
            {highlight}
            <p className="dropdown-item" onClick={() => Store.dispatch(deleteMessage(props.id))}>Eliminar</p>
        </div>
    );
}