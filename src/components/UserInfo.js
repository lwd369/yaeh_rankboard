import React from 'react';
import RankTag from './RankTag';
import './UserInfo.css';

export default function UserInfo(props) {
  return(
    <div className="user-info">
      <img className="avatar" src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png" alt="avatar"/>
      <div className="right-info">
        <RankTag rank="999" />
        <span className="user-name">lwd369</span>
      </div>
    </div>
  );
}