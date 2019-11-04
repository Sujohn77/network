const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const SET_CURRENT_USER = "SET_CURRENT_USER";

let initialState = {
    users:[
        {id:1,name:'Ivan'},
        {id:2,name:'Andrey'},
        {id:3,name:'Kolya'},
        {id:4,name:'Nikifor'},
        {id:5,name:'Misha'}
    ],
    messages:
        [
            {
                idFriend: 1,
                dialog:[
                    {id: 1, message: 'Hi Ivan',sideWriting:'left'},
                    {id: 2, message: 'How are your React?',sideWriting:'right'},
                    {id: 3, message: 'Hm... It"s very good for now',sideWriting:'left'},
                ]
            },
            {
                idFriend: 2,
                dialog:[
                    {id: 1, message: 'Hi Ivan',sideWriting:'left'},
                    {id: 2, message: 'How are your React?',sideWriting:'right'},
                    {id: 3, message: 'Hm... It"s very good for now',sideWriting:'left'},
                ]
            },
            {
                idFriend: 3,
                dialog:[
                    {id: 1, message: 'Hi Ivan',sideWriting:'left'},
                    {id: 2, message: 'How are your React?',sideWriting:'right'},
                    {id: 3, message: 'Hm... It"s very good for now',sideWriting:'left'},
                ]
            },
            {
                idFriend: 4,
                dialog:[
                    {id: 1, message: 'Hi Ivan',sideWriting:'left'},
                    {id: 2, message: 'How are your React?',sideWriting:'right'},
                    {id: 3, message: 'Hm... It"s very good for now',sideWriting:'left'},
                ]
            }


        ],
    newTextMessage:"",
    lookingActiveDialog:1
}

export const dialogReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_MESSAGE: 
            return{
                ...state,
                newTextMessage:action.newMessage
            }
        case SEND_MESSAGE:
            if(action.newTextMessage !=='') {

                return {
                    ...state,
                    messages:state.messages.map(m => {
                        if(m.idFriend == state.lookingActiveDialog){
                            m.dialog.push({id:m.dialog.length+1,message:action.newTextMessage,sideWriting:"right"});
                        }
                        return m;
                    })

                }
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.userId
            }
                
        default: return state;
    }
}

export let updateMessage = (newMessage) =>({type: UPDATE_MESSAGE,newMessage});
export let sendMessage = (newTextMessage) =>({type: SEND_MESSAGE,newTextMessage});
export let setLookingActiveDialog = (userId) => ({type: SET_CURRENT_USER,userId});