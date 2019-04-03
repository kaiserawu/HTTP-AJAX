import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.warn(err));
  }

  handleText = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="newName" placeholder="Friend's Name" value={this.state.newName} onChange={this.handleText} />
          <input type="number" name="newAge" placeholder="Friend's Age" value={this.state.newAge} onChange={this.handleText} />
          <input type="text" name="newEmail" placeholder="Friend's Email" value={this.state.newEmail} onChange={this.handleText} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
