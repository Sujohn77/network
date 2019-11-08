import React from 'react'
import "./DialogItem.css";

export let DialogItem = ({idWriter,message}) =>{
    debugger
    return(
        <>
            {idWriter !== "0" && <div className="left__content">{message}</div>}
            {idWriter === "0" && <div className="right__content">{message}</div>}
        </>
    )
}