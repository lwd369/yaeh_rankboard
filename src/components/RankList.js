
import React from 'react';
import UserInfo from './UserInfo';
import './RankList.css';

export default function RankList(props) {
  return(
    <li className="rank-list">
      <span className="rank-number">1</span>
      <UserInfo />
    </li>
  )
}