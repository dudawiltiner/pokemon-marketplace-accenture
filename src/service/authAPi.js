const URL = 'http://api-auth-java.herokuapp.com/users/';

export const fetchRegisterUser = (user) => (
  fetch(`${URL}saveuser`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default { fetchRegisterUser };
