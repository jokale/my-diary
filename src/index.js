import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

import About from './Components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Router>
  <App />
  <Navbar/>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/signup" component={SignUp} />

</Router>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
