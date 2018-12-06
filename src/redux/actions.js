// Redux actions constants and actions generators file

const TYPES = {
  SET_USERNAME: "SET_USERNAME"
};

const ACTIONS = {
  setUserName: (username) => ({ type: TYPES.SET_USERNAME, payload: { username } })
};

export { TYPES, ACTIONS };
