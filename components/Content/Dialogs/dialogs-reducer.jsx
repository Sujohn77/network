const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    users:[
        {id:'1',name:'Ivan'},
        {id:'2',name:'Andrey'},
        {id:'3',name:'Kolya'},
        {id:'4',name:'Nikifor'},
        {id:'5',name:'Misha'}
    ],
    messages:['Hi','How are your React?','Hm... It"s very good for now'],
    newTextMessage:""
}

export const dialogReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_MESSAGE: 
            return{
                ...state,
                newTextMessage:action.newMessage
            }
        case SEND_MESSAGE: 
            if(action.newTextMessage != '') {
                let stateCopy = {...state};
                stateCopy.messages.push(action.newTextMessage);
                return stateCopy;
            }
                
        default: return state;
    }
}

export let updateMessageCreator = (newMessage) =>({type: UPDATE_MESSAGE,newMessage});
export let sendMessageCreator = (newTextMessage) =>({type: SEND_MESSAGE,newTextMessage});