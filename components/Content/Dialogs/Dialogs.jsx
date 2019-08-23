import React from 'react';
import './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Friend } from './FriendList/Friend.jsx';

 const Dialogs = (props) =>{
    let newMessage = React.createRef();
    let friendMessages = props.dialogsPage.users.map(n => <Friend name={n.name}/>);
    let messages = props.dialogsPage.messages.map(m => <DialogItem message={m}/>);
    let onChange = () =>{
        props.updateMessage(newMessage.current.value);
    }
    let onClick =()=>{
        props.sendMessage(newMessage.current.value);
    }
    return(
        <div className="dialogs">
            <div className="friends">
                { friendMessages }
            </div>
            <div className="messages">
                { messages }
                <input  type="text" ref={newMessage} value={props.newTextMessage} onChange={onChange}/>
                <button onClick={onClick}>
                    Send</button>
            </div>
        </div>
    )
}
export default Dialogs;