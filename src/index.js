import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import App from './screens/App';
import './index.css';

const { REACT_APP_API_HOST = 'http://localhost:3000' } = process.env;

const networkInterface = createNetworkInterface({
  uri: `${REACT_APP_API_HOST}/graphql`,
});
const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
