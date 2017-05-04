
import React from 'react';
import BoardTitle from './BoardTitle';
import RankTag from './RankTag';
import RankList from './RankList';

export default function RankBoard(props) {
  return(
    <div className="rank-board">
      <BoardTitle title={props.boardTitle} />
      <ul>
        <RankList />
        <RankList />
        <RankList />
        <RankList />
        <RankList />
        <RankList />
      </ul>
    </div>
  );
}