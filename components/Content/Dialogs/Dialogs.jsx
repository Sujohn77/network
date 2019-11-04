import React from 'react';
import './../../../assets/css/Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Friend } from './FriendList/Friend.jsx';
import {Field, reduxForm} from "redux-form";
import {Input} from "./../../common/FormsControl.jsx"

 const Dialogs = ({lookingActiveDialog,addMessage,setLookingActiveDialog,...props}) =>{

    let users = props.dialogsPage.users.map(n =><Friend name={n.name} setLookingActiveDialog={setLookingActiveDialog} userId={n.id}/>);
    


    let dialogLookingFriend = props.dialogsPage.messages
                .filter(elem => elem.idFriend == props.dialogsPage.lookingActiveDialog)
                .map(messagesActiveFriend => messagesActiveFriend.dialog)

    let dialogs = dialogLookingFriend[0].map(m => <DialogItem message={m.message} sideWriting={m.sideWriting}/>);
                
    return(
        <div className="dialogs">
            <div className="friends">
                { users }
            </div>
            <div className="messages">
                { dialogs }
                <AddMessageReduxForm handleSubmit={addMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) =>{
     return <form onSubmit={props.handleSubmit}>
        <div>
             <Field id={"custom-field"}
                    component={Input}
                    placeholder={"Enter your message"}
                    name={"newTextMessage"}/>
             <div><input type="submit" className="btn-submit" /></div>
         </div>
     </form>
}

let AddMessageReduxForm = reduxForm({form:"dialogAddMessageForm",fields:["newTextMessage"]})(AddMessageForm);

export default Dialogs;