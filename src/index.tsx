import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createMuiTheme, ThemeProvider, ThemeOptions } from '@material-ui/core';
import { RecoilRoot } from 'recoil'
import { grey } from '@material-ui/core/colors';


const theme:ThemeOptions = createMuiTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: grey[400],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color:'#bbb'
        }
      }
    },
    MuiSelect:{
      styleOverrides: {
        root:{
          backgroundColor:'#081217',
        }
      }
    },
    MuiPaper:{
      styleOverrides: {
        root:{
          backgroundColor:'#081217',
          boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
        }
      }
    },
    MuiMenuItem:{
      styleOverrides: {
        root:{
          minHeight:'2.5rem',
          '&:hover': {
            backgroundColor:'rgba(255,255,255,0.03)',
          }
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root:{
          borderRadius: '0.5rem',
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
