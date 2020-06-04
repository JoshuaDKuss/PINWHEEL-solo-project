import React from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
//import Logo from './public/images/logo.png';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h2 id="welcome">
      What's up, { props.user.username }!
    </h2><br/>

    <img class="imageSpin1" src="https://bloximages.chicago2.vip.townnews.com/mtstandard.com/content/tncms/assets/v3/editorial/c/82/c82b41b7-15a8-57ab-b7a3-961607f7987f/55d3c70d3bd5e.image.png" 
      alt="spin" width="320" height="320"></img>

    {/* <img src={Logo} alt="logo"></img> */}
    

    <br/><br/><br/>
    {/* <a class="gradient-button gradient-button-1">SHOW ME SOME PLAYGROUNDS</a><br /> */}
    
    <p>Your ID is: {props.user.id}</p><br/>

    {/* <LogOutButton className="log-in" /> */}
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
