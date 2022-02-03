const URL = 'https://api-auth-java.herokuapp.com/users/';
const HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fetchRegisterUser = (user) => (
  fetch(`${URL}saveuser`, {
    method: 'POST',
    headers: HEADER,
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchAUthUser = (emailPassword) => (
  fetch(`${URL}auth`, {
    method: 'POST',
    headers: HEADER,
    body: JSON.stringify(emailPassword),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchChangePassword = (emailPassword) => (
  fetch(`${URL}password`, {
    method: 'PUT',
    headers: HEADER,
    body: JSON.stringify(emailPassword),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchUpdateUser = (user) => (
  fetch(`${URL}updateuser`, {
    method: 'PUT',
    headers: HEADER,
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);
