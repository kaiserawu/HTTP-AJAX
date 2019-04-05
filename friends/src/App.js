import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Friend from './components/Friend';
import NewFriendForm from './components/NewFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: [],
      newId: ''
    }
  }

  getDataFromServer = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState(prevState => {
        return ({
          friends: res.data,
          newId: prevState.newId === '' ? res.data.length + 1 : prevState.newId + 1
        })
      }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getDataFromServer();
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.friends.map(friend => {
            return (
              <Friend key={friend.id} id={friend.id} name={friend.name} age={friend.age} email={friend.email} refresh={this.getDataFromServer}/>
            )
          })}
        </ul>
        <NewFriendForm newId={this.state.newId} refresh={this.getDataFromServer}/>
        <UpdateFriendForm refresh={this.getDataFromServer}/>
      </div>
    );
  }
}

export default App;
