import React, { Component } from 'react';
import { connect } from 'react-redux';


class PgEdit extends Component {
    state = {
        pg_name: '',
        description: ''   // ''
    }

    handleClick = () => {
        console.log(this.state, this.props.match.params.id);
        this.props.dispatch({ type: `EDIT_PG`, payload: { ...this.state, id: this.props.match.params.id } });
        this.props.history.push('/info'); //PgThanks
    }

    handleNameChange = (event) => {
        console.log(this.state.pg_name);
        this.setState({ pg_name: event.target.value })
    }

    handleDescriptionChange = (event) => {
        console.log(this.state.description);
        this.setState({ description: event.target.value })
    }

    handleCancelClick = () => {
        console.log('cancel');
        this.props.history.push('/info');
    }

    render() {
        return (
            <div>
                <input onChange={this.handleNameChange} value={this.state.pg_name} placeholder="playground name"></input><br />
                <textarea onChange={this.handleDescriptionChange} value={this.state.description} placeholder="description"></textarea>
                <input onClick={this.handleClick} type="submit"></input>
                <button onClick={this.handleCancelClick}>Cancel</button>


                <div className="grid-container">
                    <div className='pg_name'>{this.props.reduxState.playground.pg_name}</div>
                    <img className="pg_photo" value={this.props.reduxState.playground.id} alt="playground_image"
                        onClick={this.handleClick} src={this.props.reduxState.playground.img_url} />
                    <div className="desc">{this.props.reduxState.playground.description}</div>


                    {/* <div className="item4">{this.props.reduxState.movie.genres}</div> */}
                </div>
            </div>
        ) // end return
    } // end render
} // end component


const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgEdit);