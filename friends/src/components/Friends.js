import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? "Loading" : ""}
        {this.state.friends.map(i => {
          return <div key={i.id}>{i.name}, {i.age}, {i.email}</div>
        })}
      </div>
    );
  }
}

export default Friends;
