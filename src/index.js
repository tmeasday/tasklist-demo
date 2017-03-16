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
networkInterface.use([
  {
    applyMiddleware(req, next) {
      req.options.headers = {
        authorization: window.token ? `JWT ${window.token}` : null,
        ...req.options.headers,
      };
      next();
    },
  },
]);
const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

const KEY = 'authToken';

window.token = localStorage.getItem(KEY);

window.login = async function(serverUrl, username, password) {
  const response = await fetch(`${serverUrl}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  window.token = data.token;
  localStorage.setItem(KEY, window.token);
}
