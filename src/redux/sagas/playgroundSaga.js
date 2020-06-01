import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPlaygrounds() {
  try {
    // the config includes credentials which allow the server session to recognize the user
    // If a user is logged in, this will return their information from the server session (req.user)
    const response = yield axios.get('/info'); //
    console.log(response);
    // now that the session has given us a user object with an id and username 
    // set the client-side user object to let the client-side code know the user is logged in
    yield put({ type: 'SET_PG', payload: response.data });  
    //yield put(fetchPlaygrounds(action));
    console.log('get PGs from server', response.data);
  } catch (error) {
    console.log('PG get request failed', error);
  }
}



function* postPlayground(action) {
  let playground = {playground: action.payload}
  console.log('in post pg / pg saga:', playground);
  try {
      yield axios.post('/info', playground);  //action.payload
      yield put ({type: 'GET_PG'});
      console.log('--- send this to server:', playground);
  } catch (error) {
      console.log('PG post request failed', error);
  }
}

function* editPlayground(action){
  let id = action.payload;
  console.log('in edit PG', action.payload);
  try {
    const response = yield axios.put(`/info`); // /playground/${description}
    yield put({
      type: 'GET_PG'
    })
  } catch (error) {
    console.log(error);
  }
}

function* playgroundSaga() {
  yield takeLatest('FETCH_PG', fetchPlaygrounds); 

  // yield takeLatest('ADD_PG', postPlayground); //
}

export default playgroundSaga;