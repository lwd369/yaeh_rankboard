import React from 'react';
import './RankTag.css';
export default function RankTag(props) {
  return(
    <div className="rank-tag">
      <div className="row-flex">
        <span className="star-icon"></span>
        <span className="rank-info">{props.rank}</span>
      </div>
    </div>
  );
}