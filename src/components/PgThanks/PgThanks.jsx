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
                <p>Thank you!</p><br/>
                <button onClick={this.handleClickThanks}>Back to Playgrounds</button>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(PgThanks);