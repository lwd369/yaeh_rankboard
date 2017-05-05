import React, { Component } from 'react';
import './App.css';
import RankBoard from './components/RankBoard';
import Utility from './utility';
import Request from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rankBoards: [],
      hosts: []
    }
  }

  render() {
    const rankBoards = this.state.rankBoards.map((rankBoard, idx) => {
      return <RankBoard boardTitle={this.state.hosts[idx]} boardData={rankBoard} key={idx}/>
    });
    
    return (
      <div className="App">
        {rankBoards}
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Request
      .get('http://api.yeahstation.com:83/v1.0/contribution/list')
      .query({ roomId: 11 })
      .end((err, res) => {
        const data = res.body.data;
        const boards = this.parseBoardJsonToArray(data);
        const hosts = this.getHostsName(boards);
        this.setState({ rankBoards: boards, hosts: hosts });
      });
  }

  parseBoardJsonToArray(data) {
    const boards = [];
    const index = [1, 2, 3, 4, 5, 6];
    for (var idx in index) {
      if (data['list' + idx] != null) {
        let item = data['list' + idx];
        boards.push(Utility.addRankNumber(item, 6));
      }
    }
    return boards;
  }

  getHostsName(boards) {
    const hosts = [];
    for (let board of boards) {
      hosts.push(board[0].AnchorName);
    }
    return hosts;
  }
}

export default App;
