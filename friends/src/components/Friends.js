import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';


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
          return (
            <Card key={i.id} >
              Name: {i.name} <br />
              Age: {i.age} <br />
              Email: {i.email}<br /><br />
            </Card>
          )
        })}<br />
      </div>
    );
  }
}

export default Friends;
