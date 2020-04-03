import React from 'react';

// TODO: Redo header with colored interior
function Header() {

    return (
        <div>
            <div className="jumbotron jumbotron-fluid mt-3" id="headjumbo">
                <div className="container">
                    <img src="./images/Toast & Clink.png" alt="logo reading Juniper Road: Rustic Fine Dining over two crossed arrows" />
                    <h3 className="display-3 text-light">Rustic & Refined</h3>
                    <p className="text-light">Mountainside lodge luxury comes to downtown Lexington. Whether by the fireside or the streetside, enjoy fine dining in a rustic atmosphere.</p>
                    <h3 className="display-3 text-light">Culinary Bliss</h3>
                    <p className="text-light">Only the finest ingredients from local, organic sources. Fresh, flavorful, and fantastic.</p>
                    <h3 className="display-3 text-light">Handcrafted Cocktails</h3>
                    <p className="text-light">Featuring the best botanicals distilled from our namesake, sample incredible creations unique to our bar.</p>
                </div>
            </div>
        </div>
    )
}


export default Header