
import React from 'react';
import BoardTitle from './BoardTitle';
import RankList from './RankList';

export default function RankBoard(props) {
  return(
    <div className="rank-board">
      <BoardTitle title={props.boardTitle} />
      <ul>
        {
          props.boardData.map((data) => {
            return <RankList {...data}/>
          })
        }
      </ul>
    </div>
  );
}