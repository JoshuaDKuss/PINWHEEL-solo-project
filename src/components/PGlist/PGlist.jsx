import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';
//import PgDetailsButton from './PgDetailsButton';
import PgListSearch from './PgListSearch';
//import PgAddNew from './PgAddNew';


class PgList extends Component {

  state = {
    pg_name: '',
    address: '',
    img_url: '',
    description: ''
}

//  constructor(props) {
//    super(props)
//    this.state = { isEmptyState: true }
// }

// triggerDescriptionState = () => {
//   this.setState({
//     ...this.state,
//     isEmptyState: false,
//     isDescriptionState: true
//   })
// }

  componentDidMount() {
    console.log('PgList props:', this.props);
    this.props.dispatch({ type: 'FETCH_PG' }); // FETCH
  }

  handleDetailClick = (event) => {
    console.log('in HDC', event.target.id);
  } //new route, query

  deletePlayground = (id) => {
    //alert('DELETE PLAYGROUND ....are you sure?');
    console.log('clicked delete', id);
    this.props.dispatch({ type: 'DELETE_PG', payload: id });
    this.props.dispatch({ type: 'FETCH_PG' });
  }

  handleImgClick = (id) => {
    console.log('handleImgClick', id);
    //this.props.dispatch({type:'PG_DETAIL', payload:this.props.playground});  // PG_DETAIL, fetch PG
    // this.props.history.push(`/PgItem/${id}`);
  }

  handleAddPgClick = () =>{
    console.log('handleAddPgClick');
    this.props.history.push('/PgAddNew');
  }

  handleFavoriteClick = (id) =>{
    console.log('clicked FAVE', id);
    //this.props.dispatch({ type: 'FAVE_PG', payload: id });
  }

  editPlayground = (id) =>{
    console.log('edit clicked', id);

    this.props.history.push(`/PgEdit/${id}`);
  }

  render() {

    return (
      <>
        <PgListSearch />
        
        <div id="addPlayground" onClick={this.handleAddPgClick}><button id="addPgBtn">Add A Playground!</button></div>
        <p id="biggie">P L A Y G R O U N D S</p>
        <div id="pg_list2">
          {/* className="card" id="large" */}

          {/* <br/><p id="biggie">P L A Y G R O U N D S</p> */}
          <br />
          {/* style="overflow:scroll; height:400px;" */}
          <div id="pg_list">{this.props.reduxState.playground.map(
            (playground) => <div className="card" id="playground" key={playground.id}>
                                       {/* originally had id="item" */}
              <div id="pg_name">{playground.pg_name}</div>
              <p id="oblique">{playground.address}</p>
              <br/><img src={playground.img_url} alt="playground-img" onClick={() => this.handleImgClick(playground.id)}></img><br/>
              <p id="description">{playground.description}</p>


              
              <br/><button id="delete" onClick={() => this.deletePlayground(playground.id)}>delete</button>
              <button id="favorite" onClick={() => this.handleFavoriteClick(playground.id)}>FAVORITE</button>
              <button id="edit" onClick={() => this.editPlayground(playground.id)}>EDIT</button>
            </div>
          )}</div>

        </div>
      </>
    ) // end return
  } // end render
} // end component


              {/* <button id={playground.id} onClick={this.handleDetailClick}>DETAILS</button><br /> */}

              {/* <div>{this.state.isEmptyState && <PgDetailsButton description={this.triggerDescriptionState} />}
              {this.state.isDescriptionState 
              // && <AnotherComponent />
              }</div>
              <PgDetailsButton description={this.triggerDescriptionState} /> */}


//export default PgList;
//                      playground          reduxState.playground
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgList);
