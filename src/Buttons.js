import React from 'react';

function Buttons(props) {
  return (
    <div className="buttons">
      <div className="icons-container">
        <div>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet?text="
            title="Tweet this quote!"
            className="icons"
          >
            <i className="twitter-icon"></i>
          </a>
        </div>
        <div id="tumblr-quote">
          <a href="https://tumblr.com" title="Post this quote on tumblr!" className="icons">
            <i className="tumblr-icon"></i>
          </a>
        </div>
      </div>
      <div>
        <button id="new-quote" onClick={e => props.handleClick(e)}>New quote</button>
      </div>
    </div>
  );
}

export default Buttons;