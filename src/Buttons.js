import React from 'react';

function Buttons(props) {
  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quote&text="${props.quote}" ${props.author}`;
  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${props.author}&content=${props.quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`;

  return (
    <div className="buttons">
      <div className="icons-container">
        <div>
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Tweet this quote!"
            className="icons"
          >
            <i className="twitter-icon"></i>
          </a>
        </div>
        <div id="tumblr-quote">
          <a
            href={tumblrUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Post this quote on tumblr!"
            className="icons">
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