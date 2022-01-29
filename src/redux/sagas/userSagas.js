import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchRegisterUser } from '../../service/authAPi';
import { registerUserAction } from '../actions';

// const registerFetch = async () => {
//   try {
//     const res = await fetchRegisterUser({
//       email: 'string@email',
//       fullName: 'string',
//       image: 'string',
//       origin: 'string',
//       password: 'string',
//       position: 'string',
//       sex: 'string',
//     });

//     return res;
//   } catch (e) {
//     return e;
//   }
// };

function* registerNewUser(action) {
  try {
    const res = yield call(fetchRegisterUser(action.body));
    yield put(registerUserAction(res));
  } catch (e) {
    yield put(registerUserAction(e));
  }
}

export function* funcTake() {
  console.log('funcTake');
  yield takeEvery('CALL_SAGA_REGISTER', registerNewUser);
}

export default { funcTake };
