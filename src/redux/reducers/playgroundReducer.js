const playgroundReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PG':
        return action.payload;
      case 'UNSET_PG':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default playgroundReducer;