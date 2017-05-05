
import React from 'react';
import BoardTitle from './BoardTitle';
import RankList from './RankList';
import './/RankBoard.css';

export default function RankBoard(props) {
  const rankLists = props.boardData.map((data) => { return <RankList {...data} /> });

  return (
    <div className="rank-board">
      <BoardTitle title={props.boardTitle} />
      <ul>
        {rankLists}
      </ul>
    </div>
  );
}