import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    // componentDidMount(){
    //     console.log('PgItem props:', this.props);
    //     this.props.dispatch( { type: 'FETCH_PG' } );
    // }

    // handleChangeFor = (event, propToCrop) => {
    //     this.setState({
    //         [propToCrop]: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {     // pgSaga
    //     event.preventDefault();
    //     this.props.dispatch({type: 'ADD_PG', payload: this.state});
    //     this.setState({
    //         description: '',
    //     })
    // }

    handleBackClick = () => {
        this.props.history.push('/');
    }

    // handleEditClick = () => {
    //     //console.log('editCLick details');
    //     this.props.history.push('/edit');
    // }

    render() {
        console.log(this.state);
        return (
            <>

            <div>{ JSON.stringify( this.props.reduxState.playground ) }</div>

            {/* {/* <div className="card" id="large"></div> */}
            {/* <h2>{this.props.reduxState.playground.pg_name}</h2> */}
            <br/><text>Name</text>
            <br/><button>Add as Favorite</button>
            {/* <form onSubmit={this.handleSubmit}>
                <label>Description: </label>
                <textarea value={this.state.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea>
                <br/>
                
                <button type="submit">Submit</button>
            </form>

            <div> */} 

                {/* <button onClick={this.handleBackClick}>Back to Playground List</button>
                <button onClick={this.handleEditClick}>Edit Playground</button> */}

                

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


            
            </>
        ) // end return
    } // end render
} // end component


// export default Details;
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(Details);