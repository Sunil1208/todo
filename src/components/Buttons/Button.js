import React from 'react';

class Button extends React.PureComponent{
    render(){
        const {label , onClick} = this.props
        return(
            <button type="submit" onClick={onClick}>{label}</button>
            )
    }
}

export default Button;