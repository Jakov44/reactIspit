import React from "react";

const Search = ({ input, setInput, getUser, getRepos, showList }) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    if (input.length > 0) {
      getUser(input);
      getRepos(input);
      showList();
    } else {
      alert("Please enter a valid search term");
    }
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
