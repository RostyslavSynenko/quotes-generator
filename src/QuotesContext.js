import React, {
  createContext,
  useEffect,
  useState
} from 'react';

import { quotesUrl, colors } from './config';

const QuotesContext = createContext();

const QuotesProvider = ({ children }) => {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState(null);
  const [color, setColor] = useState('black');

  const changeQuote = () => {
    const colorIndex = Math.floor(
      Math.random() * colors.length
    );
    const newColor = colors[colorIndex];
    const quoteIndex = Math.floor(
      Math.random() * quotes.length
    );

    setColor(newColor);
    setQuote(quotes[quoteIndex]);
  };

  const getQuotes = async () => {
    const response = await fetch(quotesUrl);
    const data = await response.json();

    setQuotes(data.quotes);
  };

  useEffect(() => {
    if (!quotes) {
      getQuotes();
    } else {
      changeQuote();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quotes]);

  return (
    <QuotesContext.Provider
      value={{ quotes, quote, color, changeQuote }}
    >
      {children}
    </QuotesContext.Provider>
  );
};

export { QuotesProvider, QuotesContext };
