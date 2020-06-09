import React from 'react';

const PgDetailsButton = props => {
    console.log('PgDetailsButton');
    return <button onClick={props.description}>DETAILS toggle</button>
}

export default PgDetailsButton;