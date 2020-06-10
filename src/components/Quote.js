import React, { useContext } from 'react';

import { QuotesContext } from '../QuotesContext';

const Quote = () => {
  const { quote, color } = useContext(QuotesContext);
  const styles = { color };

  return (
    <div style={styles}>
      <p id="text">
        <i className="fas fa-quote-left quotes-icon "></i>
        {quote.quote}
      </p>
      <p id="author">- {quote.author}</p>
    </div>
  );
};

export default Quote;
