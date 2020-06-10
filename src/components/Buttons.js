import React, { useContext } from 'react';

import { QuotesContext } from '../QuotesContext';
import { getTweetUrl, getTumblrUrl } from '../utils';

const Buttons = () => {
  const { changeQuote, color, quote } = useContext(
    QuotesContext
  );
  const styles = { backgroundColor: color };
  const tweetUrl = getTweetUrl(quote);
  const tumblrUrl = getTumblrUrl(quote);

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
            style={styles}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div id="tumblr-quote">
          <a
            href={tumblrUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Post this quote on tumblr!"
            className="icons"
            style={styles}
          >
            <i className="fab fa-tumblr"></i>
          </a>
        </div>
      </div>
      <div>
        <button
          id="new-quote"
          style={styles}
          onClick={changeQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Buttons;
