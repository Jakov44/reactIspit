import React from "react";

const Info = ({ user }) => {
  const renderUser = user ? (
    <div className="container">
      <img src={user.avatar_url} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
    </div>
  ) : (
    ""
  );

  return <div>{renderUser}</div>;
};

export default Info;
