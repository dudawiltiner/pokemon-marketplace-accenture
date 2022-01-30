import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchAUthUser } from '../../service/authAPi';
import { authUserAction } from '../actions';

function* authUser(action) {
  try {
    const res = yield call(fetchAUthUser, action.body);
    yield put(authUserAction(res));
  } catch (e) {
    yield put(authUserAction(e));
  }
}

export function* funcTake() {
  // console.log('funcTake');
  yield takeEvery('CALL_SAGA_AUTH', authUser);
}

export default { funcTake };
