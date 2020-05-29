import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';
import PgListCards from './PgListCards';
import PgListSearch from './PgListSearch';


class PgList extends Component {

    componentDidMount(){
        //console.log('CDM PgList');
        this.getPlaygrounds();
        // const action = {type: 'FETCH_PG'}; //SET, FETCH
        // this.props.dispatch(action); // dispatch
    }
    getPlaygrounds(){
        this.props.dispatch( { type: 'FETCH_PG'} );
    }


render() {
    
    return (
      <div>
        <PgListSearch />
        {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
        
        
        {/* {this.props.reduxState.playground.map( park => { */}
        {/* return <PgListCards park={ park } history={this.props.history} key={park.id} /> } ) } */}

        <PgListCards />

      </div>
    ) // end return
} // end render
} // end component




//export default PgList;
//                      playground          reduxState.playground
const mapStateToProps = (reduxState) => ( { reduxState } )

export default connect(mapStateToProps)(PgList);
