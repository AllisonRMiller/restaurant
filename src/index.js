import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Header from "./components/header";
import $ from 'jquery'
import popper from 'popper.js'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
