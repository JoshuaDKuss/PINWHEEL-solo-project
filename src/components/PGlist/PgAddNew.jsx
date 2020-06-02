import React, { Component } from 'react';
import { connect } from 'react-redux';

class PgAddNew extends Component {
    state = {
        pg_name: '',
        address: '',
        img_url: '',
        description: ''
    }

    handleChangeFor = (event, propToCrop) => {
        console.log('changing prop in PgItem');
        this.setState({
            [propToCrop]: event.target.value
        })
    }

    handleSubmit = (event) => {     // pgSaga
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PG', payload: this.state });
        this.setState({
            pg_name: '',
            address: '',
            img_url: '',
            description: ''
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <p>Add A Playground</p>
                <form onSubmit={this.handleSubmit}>
                <label>Playground Name: </label>
                <textarea value={this.state.pg_name} onChange={(event) => this.handleChangeFor(event, 'pg_name')}></textarea>
                
                <label>Address: </label>
                <textarea value={this.state.address} onChange={(event) => this.handleChangeFor(event, 'address')}></textarea>
                
                <label>Description: </label>
                <textarea value={this.state.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea>
            
                <label>Image Url: </label>
                <textarea value={this.state.img_url} onChange={(event) => this.handleChangeFor(event, 'img_url')}></textarea>
                <br/><br/><button type="submit">Submit!</button>
            </form>
                {/* <input placeholder=""></input><button>SEARCH</button> */}

            </>
        );
    }
}
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgAddNew);