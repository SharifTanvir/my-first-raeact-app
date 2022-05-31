import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  render(){
    return (
      <h1 className='heading'>
        <span className='text'>{this.props.children}Time: {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

setInterval(() => {
  ReactDOM.render( <Clock locale='bn-BD'>Current </Clock>, document.getElementById('root'));
}, 1000)

