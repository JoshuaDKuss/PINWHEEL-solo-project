import React, { Component } from 'react';

class PgListSearch extends Component {

    render() {
        return(
        <>
        {/* <input placeholder=""></input><button>SEARCH</button> */}
        <select name="filter-results" id="filter-results">
        <option value="filter">Filter results</option>
        <option value="restrooms">Public restrooms</option>
        <option value="pond">Pond access</option>
        <option value="basketball">Basketball court</option>
        <option value="tennis">Tennis court</option>
        <option value="field">Baseball field</option></select>
        </>
        );
    }
}
export default PgListSearch;
// const mapStateToProps = (reduxState) => ( { reduxState } )

// export default connect(mapStateToProps)(PgListSearch);