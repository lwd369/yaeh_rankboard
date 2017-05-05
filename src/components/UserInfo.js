import React from 'react';
import RankTag from './RankTag';
import './UserInfo.css';

export default function UserInfo(props) {

  String.prototype.toImageURL = function () {
    if (this.includes('http')) {
      return this;
    }

    const QINIU_URL = 'http://omqpgo1m2.bkt.clouddn.com/';
    return QINIU_URL + this;
  }
  
  const avatarSrc = (props.Avatar !== "" && props.Avatar !== undefined) ? props.Avatar.toImageURL() : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png";

  return (
    <div className="user-info">
      <img className="avatar" src={avatarSrc} alt="avatar" />
      <div className="right-info">
        <RankTag rank={props.Grade} />
        <span className="user-name">{props.NickName}</span>
      </div>
    </div>
  );
}

