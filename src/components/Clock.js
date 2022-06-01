import React from 'react';
import Button from './Button';

class Clock extends React.Component{
    state = {
        date: new Date(),
        locale: 'bn-BD'
    };

    componentDidMount(){
        this.clocktimer = setInterval(() =>this.tick(), 1000);
    }

    tick(){
        this.setState({
            date: new Date(),
        });        
    }

    handleClick = (locale) => {
        this.setState({
            locale: locale,
        });
    }

    componentWillUnmount(){
        clearInterval(this.clocktimer);
    }

    render(){
        const { date, locale} = this.state;
        return (
        <div>
            <h1 className='heading'>
                <span className='text'>Time: {date.toLocaleTimeString(locale)}</span>
            </h1>
            <Button change={this.handleClick} locale='en-US'/>
        </div>
    );
  }
}

export default Clock; 