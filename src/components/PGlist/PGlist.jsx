import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';
//import PgItem from '../PgItem/PgItem';
import PgListSearch from './PgListSearch';


class PgList extends Component {

    componentDidMount(){
        console.log('PgList props:', this.props);
        //this.getPlaygrounds();
        // const action = {type: 'FETCH_PG'}; //SET, FETCH

        // this.props.dispatch(action); // dispatch
        //const action = { type: 'GET_PG' };
        this.props.dispatch( { type: 'FETCH_PG' } );
    }

    // getPlaygrounds(){
    //     this.props.dispatch( { type: 'FETCH_PG'} );
    // }

    handleClick = (event) =>{
      console.log('in HC', event.target.id );
    } //new route, query

render() {
    
    return (
      <>
        <PgListSearch />
      
      <div className="card" id="large">
        
        <p>PgList</p>
        <p>{ this.props.reduxState.playground.map( 
          ( playground )=> <div className="card" id="item" key={playground.id}> 
            <h3>{playground.pg_name}</h3>
            <p>{playground.description}</p><br/>
            <button id={playground.id} onClick={ this.handleClick }>DETAILS</button><br/>
            <img src={playground.img_url}></img>
            </div> ) 
          }</p>

        {/* <PgItem /> */}
        
        {/* {this.props.reduxState.playground.map( park => { */}
        {/* return <PgListCards park={ park } history={this.props.history} key={park.id} /> } ) } */}

        

      </div>
      </>
    ) // end return
} // end render
} // end component




//export default PgList;
//                      playground          reduxState.playground
const mapStateToProps = ( reduxState ) => ( { reduxState } )

export default connect(mapStateToProps)(PgList);
