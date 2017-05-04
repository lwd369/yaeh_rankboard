import React, { Component } from 'react';
import './App.css';
import RankBoard from './components/RankBoard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <RankBoard boardTitle="学习排行榜哈哈哈" />
        <RankBoard boardTitle="游戏排行榜" />
      </div>
    );
  }
}

export default App;
