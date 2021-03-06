import React, { Component } from 'react';
import { connect } from 'react-redux';


class PgItem extends Component {
    state = {
        pg_name: '',
        address: '',
        img_url: '',
        description: ''
    }

    componentDidMount(){
        console.log('PgItem props:', this.props.match.params.id);
        this.props.dispatch( { type: 'FETCH_PG', payload: { ...this.state, id: this.props.match.params.id }  } ); // fetch pg, PG_DETAIL
    }

   

    

    handleBackClick = () => {
        this.props.history.push('/info');
    }

    // handleEditClick = () => {
    //     //console.log('editCLick details');
    //     this.props.history.push('/edit');
    // }

    handleFavoriteClick = () =>{
        console.log('fave clicked');
    }

    render() {
        console.log(this.props.reduxState);
        return (
            <div>
            <button onClick={this.handleBackClick}>BACK</button>
            <div>{ JSON.stringify( this.props.reduxState.playground.id ) }</div>
            <div id="pgImage">{this.props.reduxState.playground.img_url}</div>
            {/* {/* <div className="card" id="large"></div> */}
            {/* <h2>{this.props.reduxState.playground.pg_name}</h2> */}
            <br/><p>Name</p>
            <br/><button onClick={this.handleFavoriteClick}>Add as Favorite</button>


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

            
            </div>
        ) // end return
    } // end render
} // end component


// export default Details;
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgItem);