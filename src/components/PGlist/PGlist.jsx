import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';
//import PgItem from '../PgItem/PgItem';
import PgListSearch from './PgListSearch';


class PgList extends Component {

  componentDidMount() {
    console.log('PgList props:', this.props);
    this.props.dispatch({ type: 'FETCH_PG' });
  }

  handleClick = (event) => {
    console.log('in HC', event.target.id);
  } //new route, query

  handleImgClick = () => {
    console.log('handleImgClick', this.props.playground);
    this.props.dispatch({type:'PG_DETAIL', payload:this.props.playground});
    this.props.history.push('/PgItem');
  }

  render() {

    return (
      <>
        <PgListSearch />

        <div className="card" id="large">

          <p>P L A Y G R O U N D S</p><br />

          <div id="pg_list">{this.props.reduxState.playground.map(
            (playground) => <div className="card" id="playground" key={playground.id}>
                                       {/* originally had id="item" */}
              <div id="pg_name">{playground.pg_name}</div>
              {/* <p>{playground.description}</p> */}
              <br />
              <button id={playground.id} onClick={this.handleClick}>DETAILS</button><br />
              <img src={playground.img_url} alt="playground-img" onClick={this.handleImgClick}></img>
            </div>
          )}</div>

        </div>
      </>
    ) // end return
  } // end render
} // end component




//export default PgList;
//                      playground          reduxState.playground
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgList);
