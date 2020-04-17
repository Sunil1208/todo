import React from 'react';
import Button from '../../components/Buttons/Button';
import styles from './styles.module.css';
import Input from '../../components/Input/Input'

export default class Todo extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            listTodos: [],
        }
    }

    setTdodoItem = (text) =>{
        this.newitem = text;

        console.log()
    }
    
    onSubmit = ()=>{
        this.setState((prevState)=>({
            listTodos: [...prevState.listTodos,this.newitem],
        }),
        ()=>{
            console.log(this.state.listTodos)
        }
        );

        this.newitem = ""
    }
    
    render(){
        return(
            <div className={styles.container}>
            <h1 className={styles.title}>Todo Application</h1>
            <div style={{display:'flex'}}>
            <Input onChange={this.setTdodoItem} ref={(ref)=> {this.input = ref}}/>
            <Button label="Add" onClick={this.onSubmit}/>
            </div>
            
            </div>
        )
    }
}