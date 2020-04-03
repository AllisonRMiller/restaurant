import React from 'react';


function Footer() {

    return (
        <div>
            <div className="card bg-dark text-light" id="Hours">
                <div className="card-body">
                    <h3 className="card-title">Hours</h3>
                    <p className="card-text">Tuesday-Thursday 8:00 AM to 9:00 PM</p>
                    <p className="card-text">Friday-Sunday 7:00 AM to 10:00 PM</p>
                    <p className="card-text">Closed Monday</p>
                </div>
            </div>

            <div className="jumbotron mb-0" id="Contact">
                <div className="container">
                    <h1 className="display-3 text-light">We are always here to help</h1>
                    <p className="text-light">Phone: (859) 555-555</p>
                    <p className="text-light">348 E Main St</p>
                    <p className="text-light">Lexington, KY</p>
                    <a href="#Menu" className="text-light">Contact Us Online</a>
                </div>
            </div>
        </div>
    )
}


export default Footer