export const sendMessage =()=>
{
    return{
        type: "SEND"
    };
};
export const randomMessage =()=>
{
    return{
        type: "SEND_RANDOM"
    };
};
export const resendMessage =(id)=>
{
    return{
        type: "RESEND",
        payload: id
    };
};
export const highlightMessage =(id, options)=>
{
    return{
        type: "HIGHLIGHT",
        show: options,
        payload: id
    };
};
export const deleteMessage =(id)=>
{
    return{
        type: "DELETE",
        payload: id
    };
};
export const inputMessage=(txt)=>
{
    return{
        type: "SET_INPUT_VALUE",
        payload: txt
    };
};
export const optionsMessage=(id, options)=>
{
    return{
        type: "SHOW_OPTIONS",
        show: options,
        payload: id
    };
};