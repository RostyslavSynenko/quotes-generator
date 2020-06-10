import React, { useContext } from 'react';

import { QuotesContext } from '../QuotesContext';
import Quote from './Quote';
import Buttons from './Buttons';

const QuotesContainer = () => {
  const { color } = useContext(QuotesContext);
  const styles = { backgroundColor: color };

  return (
    <div className="container" style={styles}>
      <div id="quote-box">
        <Quote />
        <Buttons />
      </div>
      <a
        href="https://github.com/RostyslavSynenko"
        className="by"
      >
        by RSynenko
      </a>
    </div>
  );
};

export default QuotesContainer;
