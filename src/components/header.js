import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// header full width carousel that will appear below navbar and above menu--given time turn this into a parallax scroll
// Restaurant name: Juniper Road
// Copy: Mountainside lodge luxury in downtown Lexington Fine dining in a rustic atmosphere Handcrafted original cocktails
class Header extends React.Component {


    render() {
        return(
            <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Culinary bliss</h1>
                            <p>Only the finest ingredients from local, organic sources. Fresh, flavorful, and fantastic.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Rustic and refined</h1>
                            <p>Mountainside lodge luxury comes to downtown Lexington. Whether by the fireside or the streetside, enjoy fine dining in a rustic atmosphere.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Handcrafted cocktails</h1>
                            <p>Featuring the best botanicals distilled from our namesake, sample incredible creations unique to our bar.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            </div>
        )
    }
}

export default Header