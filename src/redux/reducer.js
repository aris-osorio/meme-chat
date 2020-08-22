const INITIAL_STATE = {
    messages: [
        {
            content: "Bienvenido a memechat inserta un mensaje",
            date: "Thu Aug 20 2020 19:01:06 GTM-0500 (hora de verano central)",
            showOptions: false
        }
    ],
    inputMessage : ""
};
export const chatReducer =(previousState = INITIAL_STATE, action)=>{
    switch(action.type){
        case "SEND":{
            let messages = [...previousState.messages];
            messages.push( {
                    content: "Bienvenido a memechat inserta un mensaje",
                    date: "Thu Aug 20 2020 19:01:06 GTM-0500 (hora de verano central)",
                    showOptions: false
                });
            console.log(messages)
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
            return { ...previousState, inputMessage: inputMessage};
        }
        case "SHOW_OPTIONS":{
            let messages = [...previousState.messages];
            messages[action.payload].showOptions = true;
            return { ...previousState, messages: messages };
        }
        default:{
            return previousState;
        }        
    }
}