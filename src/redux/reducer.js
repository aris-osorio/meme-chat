let moment = require('moment');
let today = moment().format('MMMM Do YYYY, h:mm')
const INITIAL_STATE = {
    messages: [
        {
            author: "AUTO_CHAT",
            content: "Bienvenido a memechat inserta un mensaje",
            date: today,
            showOptions: false
        }
    ],
    inputMessage : ""
};
const MEME_MESSAGE = [
        {
            author: "AUTO_CHAT",
            content: "1",
            date: today,
            showOptions: false
        },
        {
            author: "AUTO_CHAT",
            content: "2",
            date: today,
            showOptions: false
        },
        {
            author: "AUTO_CHAT",
            content: "3",
            date: today,
            showOptions: false
        },
        {
            author: "AUTO_CHAT",
            content: "4",
            date: today,
            showOptions: false
        },
        {
            author: "AUTO_CHAT",
            content: "5",
            date: today,
            showOptions: false
        }];
export const chatReducer =(previousState = INITIAL_STATE, action)=>{
    switch(action.type){
        case "SEND":{
            let messages = [...previousState.messages];
            messages.push({
                    author: "USER_CHAT",
                    content: previousState.inputMessage,
                    date: today,
                    showOptions: false
            });
            document.getElementById("input-txt").value = ""
            return { ...previousState, messages: messages };
        }
        case "SEND_RANDOM":{
            let messages = [...previousState.messages]
            if(messages[messages.length - 1].author === "USER_CHAT"){
                messages.push(MEME_MESSAGE[Math.floor(Math.random() * MEME_MESSAGE.length)])
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
            console.log(action.payload);
            return { ...previousState, messages: messages };
        }
        default:{
            return previousState;
        }        
    }
}