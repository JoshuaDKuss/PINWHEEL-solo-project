import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Details from './Details/Details';

class PgListCards extends Component {

    componentDidMount() {
        const action = { type: 'GET_PG' };
        this.props.dispatch(action);
    }

    // handleClick = () => {
    //     console.log(this.props.playground);
    //     this.props.dispatch({ type: 'PG_DETAIL', payload: this.props.playground });
    //     this.props.history.push('/details');
    // }

    render() {
        return (
            <div className="card">
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
                <h4>YO</h4>
                <ul>
                                                        
                {this.props.reduxState.playgroundReducer.map(playground =>
                    <li key={playground.id}>
                        <p>{playground.description}</p>
                        {/* <img src={playground.img_url} alt={playground.description} /> */}
                    </li> ) }
                {/* <button onClick <Details /> >edit</button> */}
                </ul>

                {/* <div className="pgName">{this.props.playground.pg_name}</div><br /> */}




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