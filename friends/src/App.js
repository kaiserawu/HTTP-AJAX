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

  handleText = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
        id: this.state.friends.length + 1,
        name: this.state.newFriend.name,
        age: Number(this.state.newFriend.age),
        email: this.state.newFriend.email
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  handleSubmitPut = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${this.state.selectedId}`, {
      id: this.state.selectedId,
      name: this.state.newName,
      age: Number(this.state.newAge),
      email: this.state.newEmail
    })
    .then(res => console.log(res))
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
