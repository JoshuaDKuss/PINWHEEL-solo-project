const playgroundReducer = (state = [], action) => { //[]
  console.log('pg reducer'); // action.payload
    switch (action.type) {
      case 'SET_PG':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default playgroundReducer;