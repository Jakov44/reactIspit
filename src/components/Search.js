import React from "react";

const Search = ({ input, setInput, getUser, getRepos, showList }) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    getUser(input);
    getRepos(input);
    showList();
  };
  return (
    <div className="searchCard">
      <form className="search">
        <label>Search Github:</label>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={(event) => onClickHandler(event)}>
          Go
        </button>
      </form>
    </div>
  );
};

export default Search;
