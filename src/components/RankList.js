
import React from 'react';
import UserInfo from './UserInfo';
import './RankList.css';

export default function RankList(props) {
  
  const listClass = props.Grade === undefined ? "rank-list hidden" : "rank-list";
  const medalIcon = props.no <= 3 ? <span className="medal"></span> : <span className="rank-number">{props.no}</span>;

  return(
    <li className={listClass}>
      {medalIcon}
      <UserInfo {...props}/>
      <div className="y-diamond">
        <span>{props.Amount}</span>
      </div>
      <i className="diamon-icon"></i>
    </li>
  )
}