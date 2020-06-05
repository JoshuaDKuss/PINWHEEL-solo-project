import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
// import logo from './App/logo.png';
// /App/logo.png

// console.log(Logo);
const Nav = (props) => (
  <div className="nav">
    <img class="imageSpinNav" src="https://bloximages.chicago2.vip.townnews.com/mtstandard.com/content/tncms/assets/v3/editorial/c/82/c82b41b7-15a8-57ab-b7a3-961607f7987f/55d3c70d3bd5e.image.png" 
      alt="spin" width="320" height="320"></img>
   {/* <img src={logo} id="logo" alt="logo"></img> */}
    <Link to="/home">
    {/* <Link href='https://fonts.googleapis.com/css?family=Bungee Shade' rel='stylesheet'></Link> */}
      <h1 className="nav-title">P  I  N  W  H  E  E  L</h1>
    </Link>

    <div className="nav-right"><br/><br/>
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/info">
                                      {/* /api/info */}
            Playgrounds
          </Link>
          {/* <LogOutButton className="nav-link"/> */}
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/PgChecklist">
        Checklist
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>

    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
