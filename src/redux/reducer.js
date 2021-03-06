let moment = require('moment'); 
const INITIAL_STATE = {
    messages: [
        {
            author: "AUTO_CHAT",
            content: "Bienvenido a memechat inserta un mensaje",
            date: moment(),
            showOptions: false,
            highlight: false
        }
    ],
    inputMessage : ""
};
const MEME_MESSAGE = [
        {
            content: "Yo nesesito amor, comprencion y ternura!",
        },
        {
            content: "Y mis 50 mil pesos que?",
        },
        {
            content: "Ola k ase",
        },
        {
            content: "Omae wa mou shindeiru",
        },
        {
            content: "Comete un pan",
        },
        {
            content: "Ya no puedo, pero voy a sacar el FUAAA!",
        },
        {
            content: "Tengo miedo!",
        },
        {
            content: "Que esta pasando Doctor!?",
        }];
export const chatReducer =(previousState = INITIAL_STATE, action)=>{
    switch(action.type){
        case "SEND":{
            let messages = [...previousState.messages];
            messages.push({
                    author: "USER_CHAT",
                    content: previousState.inputMessage,
                    date: moment(),
                    showOptions: false
            });
            console.log("ENVIANDO MENSAJE USUARIO")
            document.getElementById("input-txt").value = ""
            return { ...previousState, messages: messages };
        }
        case "SEND_RANDOM":{
            let messages = [...previousState.messages]
            let random = Math.floor(Math.random() * MEME_MESSAGE.length)
            if(messages[messages.length - 1].author === "USER_CHAT"){
                messages.push({
                    author: "AUTO_CHAT",
                    content: MEME_MESSAGE[random].content,
                    date: moment(),
                    showOptions: false
                });
                console.log("ENVIANDO MENSAJE RANDOM")
            }
            return { ...previousState, messages: messages };
        }
        case "RESEND":{
            let messages = [...previousState.messages];
            let label ="(Reenviado) "
            if (messages[action.payload].content.includes(label))
            {
                label =""
            }
            messages.push({
                author: "USER_CHAT",
                content: label+messages[action.payload].content,
                date:  moment(),
                showOptions: false
            });
            messages[action.payload].showOptions = false;
            console.log("REENVIANDO MENSAJE USUARIO")
            document.getElementById("input-txt").value = ""
            return { ...previousState, messages: messages };
        }
        case "HIGHLIGHT":{
            let messages = [...previousState.messages];
            messages[action.payload].highlight = action.show;
            messages[action.payload].showOptions = false;
            console.log("DESTACAR MENSAJE "+action.payload+" = "+action.show)
            return { ...previousState, messages: messages };
        }    
        case "DELETE":{
            let messages = [...previousState.messages];
            messages[action.payload] = {
                author: messages[action.payload].author,
                content: "Este mensaje ha sido eliminado",
                date: "",
                showOptions: "DELETE"
            }
            console.log("ELIMINANDO MENSAJE "+action.payload)
            return { ...previousState, messages: messages };
        }
        case "SET_INPUT_VALUE":{
            let inputMessage = [...previousState.inputMessage];
            inputMessage = action.payload;
            console.log(inputMessage);
            return { ...previousState, inputMessage: inputMessage};
        }
        case "SHOW_OPTIONS":{
            let messages = [...previousState.messages];
            messages[action.payload].showOptions = action.show;
            console.log("MOSTRAR OPCIONES DEL MENSAJE "+action.payload+" = "+action.show)
            return { ...previousState, messages: messages };
        }
        default:{
            return previousState;
        }        
    }
}