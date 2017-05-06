import React from 'react';
import './RankTag.css';
export default function RankTag({rank}) {
  return(
    <div className="rank-tag">

        <span className="star-icon"></span>
        <span className="rank-info">{rank}</span>
        <span></span>
        <span></span>
    </div>
  );
}