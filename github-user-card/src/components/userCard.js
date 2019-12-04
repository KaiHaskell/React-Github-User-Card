import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  max-width: 400px;
  background-color: white;
  margin: 20px;
  border-radius: 6px;
  filter: drop-shadow(10px 10px 10px -10px darkgrey);
  padding: 2%;
  align-items: center;
`;

const CardImg = styled.img`
  width: 200px;
  border-radius: 10px;
`;

const UserCard = props => {
  return (
    <CardDiv>
      <CardImg src={props.user.avatar_url} alt="img" />
      <h1>{props.user.login}</h1>
      <p>{props.user.bio}</p>
    </CardDiv>
  );
};

export default UserCard;
