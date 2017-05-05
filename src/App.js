import React, { Component } from 'react';
import './App.css';
import RankBoard from './components/RankBoard';
import Utility from './utility';

const avatar = "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png";

const mockData = [
  // { nickName: 'lwd', rank: '100', avatar: avatar, cost: '9999'},
  // { nickName: 'lwd123', rank: '25', avatar: '', cost: '3541'},
  // { nickName: 'lwd369', rank: '12', avatar: '', cost: '1234'},
  // { nickName: 'lwd248', rank: '1', avatar: avatar, cost: '122'},
  // { nickName: 'lwd137', rank: '12', avatar: '', cost: '50'},
];

const mockData2 = [
  // { nickName: 'lwd', rank: '100', avatar: '', cost: '9999'},
  // { nickName: 'lwd123', rank: '25', avatar: avatar, cost: '3541'},
  // { nickName: 'lwd369', rank: '12', avatar: '', cost: '1234'},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftBoards: Utility.addRankNumber(mockData, 6),
      rightBoards: Utility.addRankNumber(mockData2, 6)
    }
  }

  render() {
    return (
      <div className="App">
        <RankBoard boardTitle="学习排行榜哈哈哈" boardData={this.state.leftBoards}/>
        <RankBoard boardTitle="游戏排行榜" boardData={this.state.rightBoards}/>
      </div>
    );
  }

  componentDidMount() {

  }

  fetchData() {
    
  }
}

export default App;
