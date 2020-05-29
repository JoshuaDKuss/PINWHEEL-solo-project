//import React, { Component } from 'react';
//import { connect } from 'react-redux';


class Details extends Component {
    state = {
        description: '',
        image_url: ''
    }

    handleChangeFor = (event, propToCrop) => {
        this.setState({
            [propToCrop]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_PG', payload: this.state});
        this.setState({
            description: '',
            image_url: ''
        })
    }

    handleBackClick = () => {
        this.props.history.push('/');
    }
    handleEditClick = () => {
        //console.log('editCLick details');
        this.props.history.push('/edit');
    }

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Description: </label>
                <textarea value={this.state.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea>
                <br/>
                <label>Image Url: </label>
                <input type="text" value={this.state.image_url} onChange={(event) => this.handleChangeFor(event, 'image_url')} />
                <button type="submit">Submit</button>
            </form>

            <div>

                <button onClick={this.handleBackClick}>Back to Playground List</button>
                <button onClick={this.handleEditClick}>Edit Playground</button>

                <br />
                {/* <div className="grid-container">
                    <div className='pgName'>{this.props.playground.pg_name}</div>  
                    {/* reduxState */}

                    {/* <img className="pgPic" value={this.props.playground.id} alt="playground"
                    // reduxState
                        src={this.props.playground.img_url} /> */}

                    {/* <div className="item2">{this.props.reduxState.playground.description}</div> */} 



                    {/* {this.props.reduxState.genres.map(genre => {return <div className="item4">{genre.name}</div>} */}
                    {/* )}<br /> */}
                    
                {/* </div> */}

                {/* <p>{JSON.stringify(this.props.reduxState.genres.name, null, 2)}</p> */}


            </div>
        ) // end return
    } // end render
} // end component


// export default Details;
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(Details);