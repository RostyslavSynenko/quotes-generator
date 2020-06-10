import React from 'react';

import { QuotesProvider } from './QuotesContext';
import QuotesContainer from './components/QuotesContainer';

const App = () => {
  return (
    <QuotesProvider>
      <QuotesContainer />
    </QuotesProvider>
  );
};

export default App;
