import React, { Component } from 'react';
import { connect } from 'react-redux';



class PgThanks extends Component {

    handleClickThanks = () =>{
        //console.log('back to playgrounds');
        this.props.history.push('/info');
    }

    render() {
        return (
            <div>
                <br/><p id="biggie">T H A N K</p>
                <p id="biggie">Y O U</p><br /><br />
                <button id="favorite" onClick={this.handleClickThanks}>Back to Playgrounds</button>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgThanks);