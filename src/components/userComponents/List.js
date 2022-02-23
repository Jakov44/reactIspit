import React from "react";

const List = ({ repos }) => {
  const renderedList = repos.slice(0, 10).map((repo) => {
    return <li key={repo.id}>{repo.name}</li>;
  });
  return (
    <div>
      <h1 className="naslov">Repositories:</h1>
      <ul className="list">{renderedList}</ul>
    </div>
  );
};

export default List;
