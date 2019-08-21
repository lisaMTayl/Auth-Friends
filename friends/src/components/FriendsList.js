
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
margin: auto;
`;

const H2 = styled.h2`
    font-size: 2rem;
`;

const FriendsList = (props) => {
  console.log(props);
  return (
    <Div>
      <H2>My Friends</H2>
      <p>{props.state.name}</p>
      <p>{props.state.age}</p>
      <p>{props.state.email}</p>
    </Div>
  );
};

export default FriendsList;