import React from 'react'
export let Friend = (props) =>{
    let onClick = () =>{
        props.setLookingActiveDialog(props.userId)
    }
    return(
        <div onClick={onClick}>{props.name}</div>
    )
}