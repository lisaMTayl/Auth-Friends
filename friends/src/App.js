import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import Add from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Friends List</Link>
            </li>
            <li>
              <Link to="/add">Add A Friend</Link>
            </li>
          </ul>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/protected" component={Friends}/>
          <PrivateRoute exact path="/add" component={Add}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
