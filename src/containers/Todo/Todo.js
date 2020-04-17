import React from 'react';
import Button from '../../components/Buttons/Button';
import styles from './styles.module.css';

export default class Todo extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            listTodos: [],
            text:","
        }
    }

    // setTdodoItem = (text) =>{
    //     this.newitem = text;
    // }
    
    onSubmit = ()=>{
        this.setState((prevState)=>({
            listTodos: [...prevState.listTodos,this.state.text],
        }),
        ()=>{
            this.reset();
            this.newitem = "";

        }
        );

        
    }
    
    handleChange = (event) =>{
        this.setState({
            text: event.target.value
        })
    };

    reset=()=>{
        this.setState({text: ""});
    }

    render(){
        return(
            <div className={styles.container}>
            <h1 className={styles.title}>Todo Application</h1>
            <div style={{display:'flex'}}>
            <input onChange={this.handleChange} value = {this.state.text} />
            <Button label="Add" onClick={this.onSubmit}/>
            </div>
            
            </div>
        )
    }
}