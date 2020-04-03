import React from 'react';


function Footer() {

    return (
        <div>
            <div className="card bg-dark text-light" id="Hours">
                <div className="card-body">
                    <h5 className="card-title">Hours</h5>
                    <p className="card-text">Tuesday-Thursday 8:00 AM to 9:00 PM</p>
                    <p className="card-text">Friday-Sunday 7:00 AM to 10:00 PM</p>
                    <p className="card-text">Closed Monday</p>
                </div>
            </div>

            <div className="jumbotron mb-0" id="Contact">
                <div className="container">
                    <h1 className="display-3 text-secondary">We are always here to help</h1>
                    <p className="text-secondary">Phone: (859) 555-555</p>
                    <a href="#" className="text-secondary">Contact Us Online</a>
                </div>
            </div>
        </div>
    )
}


export default Footer