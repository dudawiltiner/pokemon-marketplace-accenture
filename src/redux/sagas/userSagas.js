import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchAUthUser, fetchUpdateUser } from '../../service/authAPi';
import { authUserAction, updateUserAction } from '../actions';

function* authUser(action) {
  try {
    const res = yield call(fetchAUthUser, action.body);
    yield put(authUserAction(res));
  } catch (e) {
    yield put(authUserAction(e));
  }
}

function* updateUser(action) {
  try {
    const res = yield call(fetchUpdateUser, action.body);
    console.log(res);
    yield put(updateUserAction(res));
  } catch (e) {
    console.log(e);
    yield put(updateUserAction(e));
  }
}

export function* funcTake() {
  console.log('funcTake');
  yield takeLatest('CALL_SAGA_AUTH', authUser);
  yield takeLatest('CALL_SAGA_UPDATE', updateUser);
}

export default { funcTake };
