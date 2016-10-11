import React from 'react';
import {container, title, slogan} from './styles.css';

export default function Home (props) {
  return (
      <div className={container}>
        <div className={title}>Duckr</div>
        <p className={slogan}>{'my slogan'}</p>
      </div>
  );
}
