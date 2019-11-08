// @flow
import React from 'react'

type Props = {|
    post:string,
|};

let MyPost = (props:Props) =>{
    return(
        <div>{props.post}</div>
    )
}
export default MyPost