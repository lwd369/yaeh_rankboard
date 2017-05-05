import React from 'react';
import RankTag from './RankTag';
import './UserInfo.css';

export default function UserInfo(props) {

  const avatarSrc = props.avatar !== "" ? props.avatar : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png";

  return(
    <div className="user-info">
      <img className="avatar" src={avatarSrc} alt="avatar"/>
      <div className="right-info">
        <RankTag rank={props.rank} />
        <span className="user-name">{props.nickName}</span>
      </div>
    </div>
  );
}