export const setInput = (input) => {
  return { type: "ADD_INPUT", payload: input };
};

export const getUser = (term) => async (dispatch) => {
  let user = await fetch(`https://api.github.com/users/${term}`)
    .then((data) => data.json())
    .then((data) => data);

  dispatch({ type: "ADD_USER", payload: user });
};

export const getRepos = (term) => async (dispatch) => {
  let user = await fetch(`https://api.github.com/users/${term}/repos`)
    .then((data) => data.json())
    .then((data) => data);

  dispatch({ type: "ADD_REPOS", payload: user });
};

export const showList = () => {
  return { type: "ADD_LIST" };
};

export const resetUser = () => {
  return { type: "ADD_USER", payload: undefined };
};

export const resetRepos = () => {
  return { type: "ADD_REPOS", payload: [] };
};
