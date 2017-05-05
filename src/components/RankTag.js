import React from 'react';
import './RankTag.css';
export default function RankTag(props) {
  return(
    <div className="rank-tag">

        <span className="star-icon"></span>
        <span className="rank-info">{props.rank}</span>
        <span></span>
        <span></span>
    </div>
  );
}