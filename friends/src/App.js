import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import Add from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { Button } from "@material-ui/core";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/*Use horizontal buttons for links*/}
          <Link to="/login"><Button color="primary">Login</Button></Link>
          <Link to="/protected"><Button  color="primary">Friends List</Button></Link>
          <Link to="/add"><Button color="primary">Add A Friend</Button></Link>

          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/protected" component={Friends}/>
          <PrivateRoute exact path="/add" component={Add}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
