import React from 'react';
import {Navigation} from 'components';

export default function MainContainer (props) {
  return (
      <div>
        <Navigation />
        {props.children}
      </div>
  );
}
