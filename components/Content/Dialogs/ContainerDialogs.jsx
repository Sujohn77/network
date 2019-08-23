import React from 'react';
import './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem.jsx';
import { Friend } from './FriendList/Friend.jsx';
import { updateMessageCreator, sendMessageCreator } from './dialogs-reducer.jsx';
import {connect} from 'react-redux';
import Dialogs from './Dialogs.jsx';
//  const ContainerDialogs = (props) =>{
//     return(
//         <StoreContext.Consumer>{
//             (store) => {
//                 let friendMessages = store.dialogsPage.users.map(n => <Friend name={n.name}/>);
//                 let messages = store.dialogsPage.messages.map(m => <DialogItem message={m}/>);
//                 let updateMessage = () =>{
//                     store.dispatch(updateMessageCreator(store.dialogsPage.newTextMessage));
//                 }
//                 let sendMessage =()=>{
//                     store.dispatch(sendMessageCreator(store.dialogsPage.newTextMessage));
//                 }
//                 return <Dialogs sendMessage={sendMessage} updateMessage={updateMessage} messages={messages} friendMessages={friendMessages} newTextMessage={store.dialogsPage.newTextMessage}/>
//             }
//         } 
//         </StoreContext.Consumer>
        
//     )
// }
// export default ContainerDialogs;
let mapStateToProps = (state) =>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage:(newTextMessage) => {
            dispatch(updateMessageCreator(newTextMessage))
        },
        sendMessage:(newTextMessage) => {
            dispatch(sendMessageCreator(newTextMessage))
        }
    }
}
 const ContainerDialogs = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
 
 export default ContainerDialogs;