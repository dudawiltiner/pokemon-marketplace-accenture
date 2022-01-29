import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchRegisterUser } from '../../service/authAPi';
import { registerUserAction } from '../actions';

const registerFetch = async () => {
  try {
    const res = await fetchRegisterUser({
      email: 'string@email',
      fullName: 'string',
      image: 'string',
      origin: 'string',
      password: 'string',
      position: 'string',
      sex: 'string',
    });

    return res;
  } catch (e) {
    return e;
  }
};

function* registerUser() {
  try {
    const res = yield call(registerFetch);
    yield put(registerUserAction(res));
  } catch (e) {
    yield put(registerUserAction(res));
  }
}

export function* funcTake() {
  console.log('funcTake');
  yield takeEvery('CALL_SAGA', registerUser);
}

export default { funcTake };
