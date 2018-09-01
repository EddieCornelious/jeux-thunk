function thunkMiddleware() {
  return dispatch => getState => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return action;
  };
};

export default thunkMiddleware();
