// @flow
import React from "react";
import type {Node} from "react";
import "../../../assets/css/Form.module.css";

type FormsProps = {
    input:mixed,
    meta:{
        error:string,
        touched:boolean
    },
    children?: Node,
    props?:mixed
}

type Props = {
    input:mixed,
    meta:{
        error:string,
        touched:boolean
    },
    child:mixed 
}

export const FormsControl = ({input, meta,children,...props}:FormsProps) =>{
    let hasError = (meta.error && meta.touched);
    return(
        <div >
            <div className={(hasError)? "error":null}>
                {children}
            </div>
            { hasError && <span className="error-text">{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props:Props) =>{
    const {input, meta,child,...restProps} = props;
    return <FormsControl {...props}><textarea  {...input} {...restProps} /></FormsControl>
}

export const Input = (props:Props) =>{
 const {input, meta,child,...restProps} = props;
       return <FormsControl {...props}><input  {...input} {...restProps} /></FormsControl>
}


