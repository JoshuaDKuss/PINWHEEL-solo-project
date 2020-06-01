import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* playgroundDetail(action) {
    try {
        const detailResponse = yield axios.get(`/info/description?id=${action.payload.id}`);
        // const genreResponse = yield axios.get(`/api/genres/details?id=${action.payload.id}`);
        yield put({ type: 'SET_DESC', payload: detailResponse.data })
        console.log(detailResponse.data);
    } catch (error) {
        console.log('Error fetching details', error);
    }
  } // end movieDetail

  function* detailSaga() {
    yield takeLatest('FETCH_PG', fetchPlayground); 
    // yield takeLatest('ADD_PG', postPlayground); //
  }
  
  export default playgroundSaga;