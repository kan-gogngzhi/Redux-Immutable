import React from 'react';
import {color} from './styles.css';

const MainContainer = React.createClass({
  render () {
    return (
        <p className={color}>{'Hello World!'}</p>
    );
  }
});

export default MainContainer;
