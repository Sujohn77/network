import React from 'react'
import "./DialogItem.css";

export let DialogItem = ({sideWriting,message}) =>{
    
    return(
        <>
            {sideWriting == "left" && <div className="left__content">{message}</div>}
            {sideWriting == "right" && <div className="right__content">{message}</div>}
        </>
    )
}