import React from 'react';
import axios from 'axios';

class UpdateFriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
    }
  }

  handleText = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = e => {
    axios.put(`http://localhost:5000/friends/${this.state.id}`, {
      id: this.state.id,
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    })
    .then(res => {
      console.log(res);
      this.props.refresh();
      this.setState({
        id: '',
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
        <input type="number" name="id" placeholder="Friend's ID" value={this.state.id} onChange={this.handleText} />
        <input type="submit" value="Update"/>
      </form>
    )
  }
}

export default UpdateFriendForm;