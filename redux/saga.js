import { all } from 'redux-saga/effects';

import todoSagas from './todo/sagas';

function* rootSaga() {
  yield all([todoSagas()]);
}

export default rootSaga;
