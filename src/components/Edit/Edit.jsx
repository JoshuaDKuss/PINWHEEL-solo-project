//import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    state = {
        description: ''
    }

    handleClick = () => {
        console.log(this.state, this.props.reduxState.movies.id);
        this.props.dispatch({ type: `EDIT_PG`, payload: { ...this.state, id: this.props.reduxState.playground.id } });
        this.props.history.push('/');
    }

    // handleDescChange = (event) => {
    //     console.log(this.state.description);
    //     this.setState({ title: event.target.value })
    // }

    handleDescriptionChange = (event) => {
        console.log(this.state.description);
        this.setState({ description: event.target.value })
    }

    handleCancelClick = () => {
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <input onChange={this.handleDescChange} value={this.state.description} placeholder="playground description"></input><br />
                <textarea onChange={this.handleDescriptionChange} value={this.state.description} placeholder="description"></textarea>
                <input onClick={this.handleClick} type="submit"></input>
                <button onClick={this.handleCancelClick}>Cancel</button>


                <div className="grid-container">
                    <div className='item1'>{this.props.reduxState.movie.title}</div>
                    <img className="item3" value={this.props.reduxState.movie.id} alt="movie-poster"
                        onClick={this.handleClick} src={this.props.reduxState.movie.poster} />
                    <div className="item2">{this.props.reduxState.movie.description}</div>


                    {/* <div className="item4">{this.props.reduxState.movie.genres}</div> */}
                </div>
            </div>
        ) // end return
    } // end render
} // end component


const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(Edit);