import { updateMessage, sendMessage,setLookingActiveDialog } from '../../../redux/dialogs-reducer.jsx';
import {connect} from 'react-redux';
import Dialogs from './Dialogs.jsx';
import React from "react";
import { extname } from 'path';

let mapStateToProps = (state) =>{
    return {
        dialogsPage:state.dialogsPage
    }
};

export const ContainerDialogsComponent = ({sendMessage,...props}) =>{

   
    let addMessage = (values)=>{

        sendMessage(values.newTextMessage);
        values.preventDefault();
     
    };
    return <Dialogs {...props} addMessage={addMessage}/>
};


 const ContainerDialogs = connect(mapStateToProps,{updateMessage,sendMessage,setLookingActiveDialog})(ContainerDialogsComponent);
 
 export default ContainerDialogs;