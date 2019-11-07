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
                    {id: 1, message: 'Hi Ivan',idWriter:'1'},
                    {id: 2, message: 'How are your React?',idWriter:'0'},
                    {id: 3, message: 'Hm... It"s very good for now',idWriter:'1'},
                ]
            },
            {
                idFriend: 2,
                dialog:[
                    {id: 1, message: 'Hi Andrey',idWriter:'2'},
                    {id: 2, message: 'How are your React?',idWriter:'0'},
                    {id: 3, message: 'Hm... It"s very good for now',idWriter:'2'},
                ]
            },
            {
                idFriend: 3,
                dialog:[
                    {id: 1, message: 'Hi Kolya',idWriter:'3'},
                    {id: 2, message: 'How are your React?',idWriter:'0'},
                    {id: 3, message: 'Hm... It"s very good for now',idWriter:'3'}
                    ]
            },
            {
                idFriend: 4,
                dialog:[
                    {id: 1, message: 'Hi Nikifor',idWriter:'4'},
                    {id: 2, message: 'How are your React?',idWriter:'0'},
                    {id: 3, message: 'Hm... It"s very good for now',idWriter:'4'},
                ]
            },
            {
                idFriend: 5,
                dialog:[
                    {id: 1, message: 'Hi Misha',idWriter:'5'},
                    {id: 2, message: 'How are your React?',idWriter:'0'},
                    {id: 3, message: 'Hm... It"s very good for now',idWriter:'5'},
                ]
            }


        ],
    newTextMessage:"",
    lookingActiveDialog:1
};

export const dialogReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_MESSAGE: 
            return{
                ...state,
                newTextMessage:action.newMessage
            };
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
                lookingActiveDialog: action.userId
            };
                
        default: return state;
    }
}

export let updateMessage = (newMessage) =>({type: UPDATE_MESSAGE,newMessage});
export let sendMessage = (newTextMessage) =>({type: SEND_MESSAGE,newTextMessage});
export let setLookingActiveDialog = (userId) => ({type: SET_CURRENT_USER,userId});