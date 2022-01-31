export const authUserAction = (payload) => ({
  type: 'AUTH_USER',
  payload,
});

export const updateUserAction = (payload) => ({
  type: 'UPDATE_USER',
  payload,
});

export const changePasswordAction = (payload) => ({
  type: 'CHANGE_PASSWORD',
  payload,
});

export default { authUserAction, updateUserAction, changePasswordAction };
