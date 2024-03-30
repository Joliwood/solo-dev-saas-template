import React from 'react';

const App = ({ Component, pageProps }: any) => {
  return <Component Component={Component} pageProps={pageProps} />;
};

export default App;
