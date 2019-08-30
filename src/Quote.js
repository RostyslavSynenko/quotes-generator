import React from 'react';

function Quote(props) {
  return (
    <div>
      <p id="text"><i className="fas fa-quote-left quote-icon"></i>{props.quote}</p>
      <p id="author">- {props.author}</p>
    </div >
  );
}

export default Quote;