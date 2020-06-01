import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';
import PgDetailsButton from './PgDetailsButton';
import PgListSearch from './PgListSearch';


class PgList extends Component {

//   state = {
//   playground: ''
// }

 constructor(props) {
   super(props)
   this.state = { isEmptyState: true }
}

triggerDescriptionState = () => {
  this.setState({
    ...this.state,
    isEmptyState: false,
    isDescriptionState: true
  })
}

  componentDidMount() {
    console.log('PgList props:', this.props);
    this.props.dispatch({ type: 'FETCH_PG' }); // FETCH
  }

  handleDetailClick = (event) => {
    console.log('in HDC', event.target.id);
  } //new route, query

  handleImgClick = () => {
    console.log('handleImgClick', this.props.playground);
    this.props.dispatch({type:'PG_DETAIL', payload:this.props.playground});  // PG_DETAIL, fetch PG
    //this.props.history.push('/PgItem');
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
              <p>{playground.description}</p>
              <br />

              {/* <button id={playground.id} onClick={this.handleDetailClick}>DETAILS</button><br /> */}

              <div>{this.state.isEmptyState && <PgDetailsButton description={this.triggerDescriptionState} />}
              {this.state.isDescriptionState 
              // && <AnotherComponent />
              }</div>
              <PgDetailsButton description={this.triggerDescriptionState} />

              <br/><img src={playground.img_url} alt="playground-img" onClick={this.handleImgClick}></img>
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
