import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPlayground() {
  try {
    // the config includes credentials which allow the server session to recognize the user
    // If a user is logged in, this will return their information from the server session (req.user)
    const response = yield axios.get('/info'); //
    console.log(response);
    // now that the session has given us a user object with an id and username 
    // set the client-side user object to let the client-side code know the user is logged in
    yield put({ type: 'SET_PG', payload: response.data });  
    //yield put(fetchPlayground(action));
    console.log(response);
  } catch (error) {
    console.log('PG get request failed', error);
  }
}



// function* postPlayground(action) {
//   try {
//       yield axios.post('/info', action.payload);
//       yield put ({type: 'GET_PG'});
//   } catch (error) {
//       console.log('PG post request failed', error);
//   }
// }

function* playgroundSaga() {
  yield takeLatest('FETCH_PG', fetchPlayground); 
  // yield takeLatest('ADD_PG', postPlayground); //
}

export default playgroundSaga;