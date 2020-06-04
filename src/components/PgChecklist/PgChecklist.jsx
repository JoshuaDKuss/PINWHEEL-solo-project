import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './PgChecklist.css';


class PgChecklist extends Component {
  constructor (props){ 
    super ();
  }
  render (){
    return (
      <>
      <br/><p id="biggie">C H E C K L I S T</p><br />
      <div className="grid-container3">
        
        <ItemList />
        <br />
        <br />
        {/* <ItemCount count={allTheThings.length} /> */}
        {/* <hr /> */}
      </div>
      </>
    );
  }
}

class Item extends React.Component {
  constructor (props){ // props
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

let item2 = <Item message="Water, drinks" />;
let item3 = <Item message="Snacks" />;
let item4 = <Item message="Wet Wipes / Hand Sanitizer" />;
let item5 = <Item message="Toys, balls, kites" />;
let item6 = <Item message="Sunscreen, toner" />;
let item7 = <Item message="Sunglasses" />;
let item8 = <Item message="Swimsuits, towels, sandals" />;
let item9 = <Item message="Diapers" />;
let item10 = <Item message="Hiking/Tennis/Basketball/Water shoes" />;

let allTheThings = [item2, item3, item4, item5, item6, item7, item8, item9, item10];
class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

// class ItemCount extends React.Component {
//   constructor (props){
//     super ();
//   }
//   render (){
//     return (
//       <h4>There are {this.props.count} items on your list</h4>
//     );
//   }
// }





// let target = document.getElementById('app');
// ReactDOM.render(<AppContainer />, target);

export default PgChecklist;