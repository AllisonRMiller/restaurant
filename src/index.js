import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./components/jumbotron.css";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import "./components/bootstraptheme.css"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
  <div className="bg-light">
    <Navbar />
    <Header />
    <Menu />
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
