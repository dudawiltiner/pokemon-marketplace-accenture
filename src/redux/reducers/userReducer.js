const INITIAL_STATE = {
  items: {},
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RESGISTER_USER':
    // console.log('aqui');
    return { items: action.payload };
  default:
    // console.log('aqui2');
    return state;
  }
};

export default UserReducer;
