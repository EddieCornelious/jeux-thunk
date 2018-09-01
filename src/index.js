function thunkMiddleware(someArgument) {
  return dispatch => getState => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, someArgument);
    }
    return action;
  };
}

export default thunkMiddleware;
