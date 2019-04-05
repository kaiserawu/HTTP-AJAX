import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import NewFriendForm from './components/NewFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: [],
      updatedFriend: {
        id: '',
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id}>
                <h2>{friend.name}</h2>
                <h4>{friend.age}</h4>
                <h3>{friend.email}</h3>
              </li>
            )
          })}
        </ul>
        <NewFriendForm newId={this.state.friends.length + 1} />
        <UpdateFriendForm />
      </div>
    );
  }
}

export default App;
