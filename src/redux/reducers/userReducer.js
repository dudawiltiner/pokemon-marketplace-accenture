const INITIAL_STATE = {
  res: {},
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'AUTH_USER':
    // console.log('aqui');
    return { res: action.payload };
  default:
    // console.log('aqui2');
    return state;
  }
};

export default UserReducer;
