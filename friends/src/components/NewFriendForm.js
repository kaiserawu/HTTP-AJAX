import React from 'react';
import axios from 'axios';

class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  handleText = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
        id: this.props.newId,
        name: this.state.name,
        age: Number(this.state.age),
        email: this.state.email
      })
      .then(res => {
        console.log(res);
        this.props.refresh();
        this.setState({
          name: '',
          age: '',
          email: ''
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="name" placeholder="Friend's Name" value={this.state.name} onChange={this.handleText} />
        <input type="number" name="age" placeholder="Friend's Age" value={this.state.age} onChange={this.handleText} />
        <input type="text" name="email" placeholder="Friend's Email" value={this.state.email} onChange={this.handleText} />
        <input type="submit" />
      </form>
    )
  }
}

export default NewFriendForm;