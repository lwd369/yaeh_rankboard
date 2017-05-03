
import React from 'react';
import BoardTitle from './BoardTitle';

export default function RankBoard(props) {
  return(
    <div className="rank-board">
      <BoardTitle title={props.boardTitle} />
      <ul>
        <li>lwd369</li>
        <li>lwd369</li>
        <li>lwd369</li>
        <li>lwd369</li>
      </ul>
    </div>
  );
}