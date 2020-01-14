import React from "react";

export const UserCard = props => {
  return (
    <div>
      <h1>
        <img src={props.user.avatar_url} alt="img" />
        <h1>{props.user.login}</h1>
        <p>{props.user.bio}</p>
      </h1>
    </div>
  );
};
