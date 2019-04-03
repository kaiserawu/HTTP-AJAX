import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.warn(err));
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
      </div>
    );
  }
}

export default App;
