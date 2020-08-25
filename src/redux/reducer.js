let moment = require('moment'); 
const INITIAL_STATE = {
    messages: [
        {
            author: "AUTO_CHAT",
            content: "Bienvenido a memechat inserta un mensaje",
            date: moment().format('MMMM Do YYYY, h:mm'),
            showOptions: false
        }
    ],
    inputMessage : ""
};
const MEME_MESSAGE = [
        {
            content: "1",
        },
        {
            content: "2",
        },
        {
            content: "3",
        },
        {
            content: "4",
        },
        {
            content: "5",
        }];
export const chatReducer =(previousState = INITIAL_STATE, action)=>{
    switch(action.type){
        case "SEND":{
            let messages = [...previousState.messages];
            messages.push({
                    author: "USER_CHAT",
                    content: previousState.inputMessage,
                    date: moment().format('MMMM Do YYYY, h:mm'),
                    showOptions: false
            });
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
                    date: moment().format('MMMM Do YYYY, h:mm'),
                    showOptions: false
                });
                console.log(messages)
            }
            return { ...previousState, messages: messages };
        }
        case "DELETE":{
            let messages = [...previousState.messages];
            messages.splice(action.payload, 1);
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
            console.log("estoy cambiando item "+action.payload+" a "+action.show)
            console.log(messages)
            return { ...previousState, messages: messages };
        }
        default:{
            return previousState;
        }        
    }
}