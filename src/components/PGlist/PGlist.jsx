import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import './PGlist.css';
//import '../Details/Details';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const PGlist = () => (
{/* <p>Playground listings in your area</p> */}

class PGlist extends Component {

// handleClick = () => {
//     console.log(this.props.playground);
//     this.props.dispatch({type:'PG_DETAIL', payload:this.props.playground});
//     this.props.history.push('/details');
// }

render() {
    return (
      <>
      <input placeholder="SEARCH"></input>
        {/* <div className="card">
            <div className="container"> */}
            {/* <div className='item1'>{this.props.movie.title}</div><br/><br/> */}
            {/* <img className="item3" alt = "movie-poster" onClick={this.handleClick} src = {this.props.movie.poster}/> */}


            {/* <div>{this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div> */}
            {/* <div className="item2">{this.props.movie.description}</div> */}
            {/* {this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div>})}<br /> */}
            {/* <p>{JSON.stringify(this.props.reduxState.genres.name, null, 2)}</p> */}
            {/* </div>
        </div> */}
        </>
    ) // end return
} // end render
} // end component




export default PGlist;

// const putReduxStateOnProps = (reduxState) => ( { reduxState } )

// export default connect(putReduxStateOnProps)(PGlist);
