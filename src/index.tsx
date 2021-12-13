import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil'
import mapboxgl from 'mapbox-gl'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyle'
import { useLayout } from 'misc';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const client = new ApolloClient({
  uri: 'https://spatialtech.herokuapp.com/http://dev.spatialtech.info:8083/v1/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
});


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
          <GlobalStyle/>
          <App />
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
