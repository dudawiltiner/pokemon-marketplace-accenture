const INITIAL_STATE = {
  res: {},
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'AUTH_USER':
    return { res: action.payload };
  case 'UPDATE_USER':
    return { res: action.payload };
  case 'CHANGE_PASSWORD':
    return { res: action.payload };
  default:
    return state;
  }
};

export default UserReducer;
