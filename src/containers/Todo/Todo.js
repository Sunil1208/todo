import React from 'react';
import Button from '../../components/Buttons/Button';
import styles from './styles.module.css';

export default class Todo extends React.PureComponent {
    
    constructor(props){
        super(props);
        this.state = {
            isClick: false,
        };
    }
    
    handleClick =()=>{
        this.setState({
            isClick: !this.state.isClick
        })
    }
    
    
    render(){
        const {isClick} = this.state
        return(
            <div className={styles.container}>
            <h1 className={styles.title}>Todo Application</h1>
            { isClick ? <span>Clicked</span> : <span>Not Clicked</span>}
            <Button label="Add" onClick={this.handleClick}/>
            </div>
        )
    }
}