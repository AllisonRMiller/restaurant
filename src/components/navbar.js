import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar-top.css";
import $ from 'jquery'
import popper from 'popper.js'

// Navbar with logo, gradient background, fades from color into transparent, collapse at medium


class Navbar extends React.Component{
    


    render(){
        return (
            <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#">Top navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="container mr-5">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Menu <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Hours & Location</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
          </div>
        )
    }
}

export default Navbar