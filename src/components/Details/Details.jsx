import React, { Component } from 'react';
//import { connect } from 'react-redux';


class Details extends Component {

    handleBackClick = () => {
        this.props.history.push('/');
    }
    handleEditClick = () => {
        //console.log('editCLick details');
        this.props.history.push('/edit');
    }

    render() {
        return (

            <div>
                <button onClick={this.handleBackClick}>Back to Playground List</button>
                <button onClick={this.handleEditClick}>Edit Playground</button>

                <br />
                <div className="grid-container">
                    <div className='pgName'>{this.props.playground.name}</div>  
                    {/* reduxState */}

                    <img className="pgPic" value={this.props.playground.id} alt="playground-photo"
                    // reduxState
                        src={this.props.playground.img_url} />

                    <div className="item2">{this.props.reduxState.movie.description}</div>
                    {this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div>}
                    )}<br />
                    
                </div>
                {/* <p>{JSON.stringify(this.props.reduxState.genres.name, null, 2)}</p> */}
            </div>
        ) // end return
    } // end render
} // end component

export default Details;
// const putReduxStateOnProps = (reduxState) => ({ reduxState })

// export default connect(putReduxStateOnProps)(Details);