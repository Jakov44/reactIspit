const initialState = {
  input: "",
  user: undefined,
  repos: [],
  list: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, input: action.payload };
    case "ADD_USER":
      return { ...state, user: action.payload };
    case "ADD_REPOS":
      return { ...state, repos: action.payload };
    case "ADD_LIST":
      return { ...state, list: !state.list };
    default:
      return state;
  }
}
