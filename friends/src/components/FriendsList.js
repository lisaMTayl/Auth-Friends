
import React from 'react';

const FriendsList = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.state.name}</p>
      <p>{props.state.age}</p>
      <p>{props.state.email}</p>
    </div>
  );
};

export default FriendsList;