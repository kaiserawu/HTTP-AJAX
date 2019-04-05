import React from 'react';
import axios from 'axios';

import './Friend.css';

const Friend = props => {

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/friends/${props.id}`)
      .then(res => {
        console.log(res);
        props.refresh();
      })
      .catch(err => console.error(err));
  }

  return (
    <li>
      <h2>{props.name}</h2>
      <h4>{props.age}</h4>
      <h3>{props.email}</h3>
      <button className="deleteButton" onClick={handleDelete}>x</button>
    </li>
  )
}

export default Friend;