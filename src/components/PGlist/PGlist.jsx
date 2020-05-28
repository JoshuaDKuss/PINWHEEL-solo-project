import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
// const PgList = () => (

class PgList extends Component {

    componentDidMount(){
        console.log('CDM PgList');
        this.getPlaygrounds();
        // const action = {type: 'FETCH_PG'}; //SET, FETCH
        // this.props.dispatch(action); // dispatch
    }
    getPlaygrounds(){
        this.props.dispatch({ type: 'FETCH_PG'});
    }


    
// handleClick = () => {
//     console.log(this.props.playground);
//     this.props.dispatch({type:'PG_DETAIL', payload:this.props.playground});
//     this.props.history.push('/details');
// }

render() {
    
    return (
      <>
      {/* <input placeholder=""></input><button>SEARCH</button> */}
      <select name="filter-results" id="filter-results">
      <option value="kiddie">Filter results</option>
      <option value="kiddie">Kiddie-friendly</option>
      <option value="restrooms">Public restrooms</option>
      <option value="pond">Pond access</option>
      <option value="basketball">Basketball court</option>
      <option value="tennis">Tennis court</option>
      <option value="field">Baseball field / Open field</option>
      </select>
    
        <div className="card">
            <div className="container">
            {/* <div className="pgName">{this.props.playground.id}</div>  */}
            {/* .pg_name.id */}
            {/* <br/><br/> */}
            <p>{JSON.stringify(this.props.reduxState)}</p> 
            {/* .reduxState.playground  */}
            
            <br/><p>hello</p>
            {/* <img className="item3" alt = "movie-poster" onClick={this.handleClick} src = {this.props.movie.poster}/> */}


            {/* <div>{this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div> */}
            {/* <div className="item2">{this.props.movie.description}</div> */}
            {/* {this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div>})}<br /> */}
            {/* <p>{JSON.stringify(this.props.reduxState.genres.name, null, 2)}</p> */}
            </div>
        </div>
        </>
    ) // end return
} // end render
} // end component




//export default PgList;
//                      playground          reduxState.playground
const mapStateToProps = (reduxState) => ( { reduxState } )

export default connect(mapStateToProps)(PgList);
