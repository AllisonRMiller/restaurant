import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import popper from 'popper.js'
import axios from 'axios';
// import Work from "./work"

// TODO: Finish accordion, save to local storage
// call to API
async function phoneHome(x) {
    var link = "https://entree-f18.herokuapp.com/v1/menu/" + x;
    console.log(link);
    var res="";
    await axios.get(link).then(function (response){res=response.data.menu_items;console.log(res);return(res)}).catch(function(error){console.log(error)})
    // .finally(res=>{return (res)})
    // .then(response => { return (response.menu_items) })
    return res;
}

// generates random prices
function priceGenerator(min,max){
    min = Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max-min +1)) +min;
}


// generates cards with details for dishes
function generateDish(x) {
    var text = x.description;
    console.log(text);
    var price = x.price;
    console.log(price);
    var id = x.id;
    return (
        <div className="col-3" key={id}>
        <div className="card">
            <div className="card-body">
                <p className="card-text">{text}<div className="text-right">${price}</div></p>
            </div>
        </div>
        </div>
    )
}


// renders all menu sections together
class Menu extends React.Component{


    render(){
        return(
            <Appetize />
        )
    }
}


// generates the list of appetizers
class Appetize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {localMenu: []}
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("appetizers"));
        console.log(prevMenu);
        if (prevMenu === null) {var newMenu = (await phoneHome(8)); await console.log({newMenu}); var currentMenu = newMenu}
        else {currentMenu= prevMenu }
        currentMenu.map((x)=>{x.id="app"+currentMenu.indexOf(x); x.price=priceGenerator(5,10) })
        console.log(currentMenu)
        await this.setState({localMenu: currentMenu})
    }


    render() {



        return (
                <div className="row">
                    <div className="col-12">
                        {/* accordion here */}
                        <div className="accordion">
                        {this.state.localMenu.map(x=> (generateDish(x)))}
                        {/* map across cards here */}
                        </div>

                    </div>
                </div>
        )
    }

}



export default Menu