// @flow

import React from "react"

type Props = {|
    status?:string,
    updateStatus:(value:string)=>void
|}

type State = {
    editMode:boolean,
    status:string
}

type Event = {
    target:{
        value:string
    }
}

export class ProfileStatus extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
            editMode:false,
            status:""
        }
    }
    enableEditMode(e:Event):void {
        this.setState({editMode:true})
    }
    componentDidUpdate(prevProps:Props, prevState:State) {
        if(this.props.status != prevState.status){
            this.setState({status: this.props.status})
        }
    }

    disableEditMode(e:Event):void{
        this.setState({editMode:false})
        if(this.props.status != this.state.status){
            this.props.updateStatus(e.target.value.toString());
        }

    }
    onChange(e:Event):void{
        this.setState({status:e.target.value.toString()});
    }

    render(){
        return(
            <>
                {!this.state.editMode &&
                <div onDoubleClick={this.enableEditMode.bind(this)} >
                    <b>Status: </b>
                    {this.props.status}
                </div>}

                {this.state.editMode &&
                <div>
                    <b>Status: </b>
                    <input type="text" autoFocus={true} defaultValue={this.props.status} onBlur={this.disableEditMode.bind(this)} onChange={this.onChange.bind(this)}/>
                </div>}
            </>
            )
    }
}