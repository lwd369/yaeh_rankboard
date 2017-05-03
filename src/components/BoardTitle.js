// flow

import React from 'react';
import './BoardTitle.css';

export default function BoardTitle(props) {
  return(
    <h2 className='board-title'>
      {props.title}
    </h2>
  );
}