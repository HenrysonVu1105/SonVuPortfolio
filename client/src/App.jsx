/*
// File name: App.jsx
// Student name: Vu Huy Hoang Son
// Student ID: 301366093
// Date: 21 Sep 2024
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
  return (
    <Router>
      
        <MainRouter />
     
    </Router>
  );
};
export default App;
