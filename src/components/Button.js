import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps, nextStates){
        const {change: currentChange} = this.props;
        const {change: nextChange} = nextProps;
        if(currentChange === nextChange) {
            return false;
        }else{
            return true;
        }
    }
    render(){
        const {change, locale} = this.props;
        return (
            <button type='button' onClick={change}>Click here</button>
        );
    }
}

export default Button; 