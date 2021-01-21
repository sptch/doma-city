import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil'
import { grey } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[700],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root:{
          backgroundColor: grey[300],
          color: '#111',
          borderRadius: '1rem',
          '&:hover': {
              backgroundColor: grey[900],
              color: '#FFF'
          }
        }
      },
    }
  }
});

const client = new ApolloClient({
  uri: 'https://spatialtech.herokuapp.com/http://dev.spatialtech.info:8083/v1/graphql',
  headers: {
    "x-hasura-admin-secret": "As12345"
  },
  cache: new InMemoryCache({
    addTypename: false
  })
});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
