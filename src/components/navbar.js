import React from 'react';



// TODO: Change "Menu" to dropdown that can jump to each menu section?
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark text-light" id="topnav">
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#Menu">Menu <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Hours">Hours & Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )

}

export default Navbar