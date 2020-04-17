import React from 'react'

export default class Input extends React.PureComponent{
    constructor(props){
        super(props);

        this.state ={
            text: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            text: event.target.value
        })
    };

    reset(){
        this.setState({text: ""});
    }

    render(){

        
        return(
            <input onChange={this.handleChange} value = {this.state.text} />    //value = {this.state.text} -> control input
        )
    }
}