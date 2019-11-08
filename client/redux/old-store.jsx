import { dialogReducer } from "../components/Content/Dialogs/dialogs-reducer.jsx";
import { profileReducer } from "../components/Content/Profile/profile-reducer.jsx";
let store = {
    _state:{
         profilePage:{
             posts:[
                 {id:1,message:"Hi... it's my post"},
                 {id:2,message:"Ohh, it's nice"},
                 {id:3,message:"React Redux learning "},
                 {id:4,message:"develop prof skills"},
                 {id:5,message:"let's begin"}
             ],
             newPostMessage:""
         },
         dialogsPage:{
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
    },
    _callSubscriber(){
        console.log('no subcribers (observes)');
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        dialogReducer(action,this._state.dialogsPage);
        profileReducer(action,this._state.profilePage);
        this._callSubscriber(this._state);

    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}
export default store;