
import React from 'react';
import UserInfo from './UserInfo';
import './RankList.css';

export default function RankList(props) {

  const medalIcon = props.isMedal ? <span className="medal"></span> : <span className="rank-number">1</span>;
  return(
    <li className="rank-list">
      {medalIcon}
      <UserInfo />
      <div className="y-diamond">
        <span>88</span>
      </div>
      <i className="diamon-icon"></i>
    </li>
  )
}