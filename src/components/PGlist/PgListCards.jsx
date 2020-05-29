import React, { Component } from 'react';
import { connect } from 'react-redux';

class PgListCards extends Component {

    handleClick = () => {
        console.log(this.props.park);
        this.props.dispatch({ type: 'PG_DETAIL', payload: this.props.park });
        this.props.history.push('/details');
    }

    render() {
        return (
            <div className="card">
                <p>{JSON.stringify(this.props.reduxState)}</p>
                <div className="pgName">{this.props.park.pg_name}</div><br />


                {/* .reduxState.playground  */}

                {/* <img className="item3" alt = "movie-poster" onClick={this.handleClick} src = {this.props.movie.poster}/> */}

                {/* <div>{this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div> */}
                {/* <div className="item2">{this.props.movie.description}</div> */}
                {/* {this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div>})}<br /> */}
                {/* <p>{JSON.stringify(this.props.reduxState.genres.name, null, 2)}</p> */}

            </div>
        );
    }
}


// export default PgListCards;
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgListCards);