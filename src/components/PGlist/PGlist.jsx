import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PgList.css';
//import '../Details/Details';
//import PgDetailsButton from './PgDetailsButton';
import PgListSearch from '../PgFeatures/PgListSearch';
//import PgAddNew from './PgAddNew';
// import Button from 'react-bootstrap/Button';


class PgList extends Component {

  state = {
    pg_name: '',
    address: '',
    img_url: '',
    description: ''
}

  componentDidMount() {
    //console.log('PgList props:', this.props);
    this.props.dispatch({ type: 'FETCH_PG' }); // FETCH
  }

  handleDetailClick = (event) => {
    //console.log('in HDC', event.target.id);
  } //new route, query

  deletePlayground = (id) => {
    //alert('DELETE PLAYGROUND ....are you sure?');
    //console.log('clicked delete', id);
    this.props.dispatch({ type: 'DELETE_PG', payload: id });
    this.props.dispatch({ type: 'FETCH_PG' });
  }
  

  handleImgClick = (id) => {
    console.log('handleImgClick', id);
    //this.props.dispatch({type:'PG_DETAIL', payload:this.props.playground});  // PG_DETAIL, fetch PG
    // this.props.history.push(`/PgItem/${id}`);
  }

  handleAddPgClick = () =>{
    //console.log('handleAddPgClick');
    this.props.history.push('/PgAddNew');
  }

  handleFavoriteClick = (id) =>{
    console.log('clicked FAVE', id);
    //this.props.dispatch({ type: 'FAVE_PG', payload: id });
  }

  editPlayground = (id) =>{
    //console.log('edit clicked', id);

    this.props.history.push(`/PgEdit/${id}`);
  }

  render() {

    return (
      <>
        <PgListSearch />
        
        <div id="addPlayground" onClick={this.handleAddPgClick}>
          <button id="addPgBtn">Add A Playground!</button>
        </div>
       
        <p id="biggie">P L A Y G R O U N D S</p>

        <div id="pg_list_overflow"><br/>
          
          <div>{this.props.reduxState.playground.map((playground) => 
          <div className="card" id="playground" key={playground.id}>
                                      
              <p id="pg_name">{playground.pg_name}</p>
              <p id="oblique">{playground.address}</p>
              <img src={playground.img_url} alt="playground-img" onClick={() => this.handleImgClick(playground.id)}></img>

              <br/><button id="delete" onClick={() => this.deletePlayground(playground.id)}>delete</button>
              <button id="favorite" onClick={() => this.handleFavoriteClick(playground.id)}>favorite</button>
              <button id="edit" onClick={() => this.editPlayground(playground.id)}>edit</button>
              <br/>
              <p id="description">{playground.description}</p>
              
              
            </div>
          )}</div>

        </div>
      </>
    ) // end return
  } // end render
} // end component


           
const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgList);

