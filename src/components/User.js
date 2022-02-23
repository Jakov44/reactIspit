import React from "react";
import Info from "./userComponents/Info";
import List from "./userComponents/List";

const User = ({ user, repos, showList, resetUser, resetRepos, setInput }) => {
  const onClickHandler = () => {
    resetUser();
    resetRepos();
    setInput("");
    showList();
  };
  return (
    <div className="user">
      <Info user={user} />
      <List repos={repos} />
      <button className="reset" type="button" onClick={() => onClickHandler()}>
        Reset
      </button>
    </div>
  );
};

export default User;
