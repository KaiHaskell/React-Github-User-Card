import React from "react";

export const FollowerCards = ({ img, followers, bio }) => {
  return (
    <div>
      <img src={img} />
      <h2>{followers}</h2>
      <p>{bio}</p>
    </div>
  );
};
