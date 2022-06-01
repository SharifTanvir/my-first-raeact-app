import React from 'react';

class Clock extends React.Component{
    state = {
        date: new Date()
    };

    componentDidMount(){
        this.clocktimer = setInterval(() =>this.tick(), 1000);
    }
    tick(){
        this.setState({
            date: new Date()
        });        
    }

    componentWillUnmount(){
        clearInterval(this.clocktimer);
    }
  render(){
    return (
      <h1 className='heading'>
        <span className='text'>Time: {this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

export default Clock; 