import React, { Component } from 'react';
import moment from 'moment';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button } from "@material-ui/core";

class AddFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddFriend = () => {
    const { name, age, email } = this.state;
    const pass = this.newFriend({ name, age, email })
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', pass)
      .then(res => {
        console.log('Adding new friend!', res)
      })
      .catch(err => console.log('Add new friend failed', err.response));

    this.setState({ name: '', age: '', email: '' });
  };

  newFriend = ({ name, age, email }) => {
    return ({
      id: moment(),
      name: name,
      age: age,
      email: email
    })
  };

  render() {
    return (
      <form className='login'>
        <h3>Add A New Friend to Your List</h3>

        <div>
          <input
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            value={this.state.age}
            name="age"
            type="text"
            placeholder="Age"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            value={this.state.email}
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div><br />
        <Button variant='contained' color='secondary' onClick={() => this.handleAddFriend()} type="button">
          Add New Friend
        </Button>
      </form>
    );
  }
}

export default AddFriend;