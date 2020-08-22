export const sendMessage =()=>
{
    return{
        type: "SEND"
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
export const optionsMessage=(id)=>
{
    return{
        type: "SHOW_OPTIONS",
        payload: id
    };
};