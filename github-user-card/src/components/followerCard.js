import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  max-width: 400px;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const CardImg = styled.img`
  width: 300px;
`;

const FollowerCard = ({ followers, img, bio }) => {
  return (
    <CardDiv>
      <CardImg src={img} />
      <h2>{followers}</h2>
    </CardDiv>
  );
};

export default FollowerCard;
