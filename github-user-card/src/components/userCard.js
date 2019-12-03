import React from "react";

const UserCard = props => {
  return (
    <div>
      <img src={props.avatar_url} alt="img" />
      <h1>{props.login}</h1>
    </div>
  );
};

export default UserCard;
