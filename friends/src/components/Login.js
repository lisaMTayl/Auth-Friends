import React from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Button } from "@material-ui/core";

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

   handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.setState({
          ...this.state,
          isLoading: false
        });
        this.props.history.push("/protected")
      })

      .catch(err => {
        console.log(err.response);
        this.setState({
          ...this.state,
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Sign in to view your friends</h1>
        <form onSubmit={this.login}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="name"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
          />
          </div><br />
          <Button variant='contained' color='secondary' href='/protected'>Login</Button>
        </form>
      </div>
    );
  }
}

export default Login;
