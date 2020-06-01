const detailReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PG_DETAIL':
            return action.payload;
        default:
            return state;
    }
} //end 

export default detailReducer;