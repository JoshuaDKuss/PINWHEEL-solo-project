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


render() {
    
    return (
      <>
        <PgListSearch />
      
      <div className="card">
        
        <p>PgList</p>
        <p>{JSON.stringify(this.props.reduxState)}</p>

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
