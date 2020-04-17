import React from 'react';
import  {Button as Button1} from '@material-ui/core';

class Button extends React.PureComponent{
    render(){
        const {label , onClick} = this.props
        return(
            <Button1 type="submit" onClick={onClick}>{label}</Button1>
            )
    }
}

export default Button;