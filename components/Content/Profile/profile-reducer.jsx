const UPDATE_POST = "UPDATE_POST";
const SEND_POST = "SEND_POST";

let initialState = {
    posts:[
        {id:1,message:"Hi... it's my post"},
        {id:2,message:"Ohh, it's nice"},
        {id:3,message:"React Redux learning "},
        {id:4,message:"develop prof skills"},
        {id:5,message:"let's begin"}
    ],
    newPostMessage:""
}
export const profileReducer = (state = initialState,action ) => {
    if(action.type == "UPDATE_POST"){
        return {
            ...state,
            newPostMessage: action.newPostMessage
        }
    } else if(action.type == "SEND_POST"){
        debugger
        if(action.newPostMessage != ''){
            return{
                ...state,
                posts:() => {state.posts.push({'id':6,'message':action.newPostMessage})},
                newPostText:""
            }
        }
            
    }
    return state;
}

export let updateMessageCreator = (newPostMessage) =>({type: UPDATE_POST,newPostMessage});
export let sendMessageCreator = (newPostMessage) =>({type: SEND_POST,newPostMessage});