import React from 'react';
import "../App.css"

const Phrase = (props) => {
    return (
        <div className="list">
            <div className="block"><h3>{props.text}</h3></div>
        </div>
    );
};

export default Phrase;