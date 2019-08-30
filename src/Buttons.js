import React from 'react';

function Buttons(props) {
  return (
    <div className="buttons">
      <div className="icons-container">
        <div id="tweet-quote">
          <a href="https://twitter.com/intent/tweet" title="Tweet this quote!" className="icons">
            <i className="twitter-icon"></i>
          </a>
        </div>
        <div id="tumblr-quote">
          <a href="https://tumbler.com" title="Post this quote on tumblr!" className="icons">
            <i className="tumblr-icon"></i>
          </a>
        </div>
      </div>
      <div>
        <button id="new-quote" onClick={() => props.handleClick()}>New quote</button>
      </div>
    </div>
  );
}

export default Buttons;