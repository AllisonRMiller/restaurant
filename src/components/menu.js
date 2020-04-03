import React from 'react';
import axios from 'axios';

// call to API TODO: Make this trigger an error popup if the call fails
async function phoneHome(x) {
    var link = "https://entree-f18.herokuapp.com/v1/menu/" + x;
    var res = "";
    await axios.get(link)
        .then(function (response) {
            res = response.data.menu_items;
            return (res)
        })
        .catch(function (error) {
            console.log(error)
        })
    // .finally(res=>{return (res)})
    return res;
}

// list of cocktails from a random cocktail generator
function makeDrinks(x) {
    var drinks = [
        {
            name: "Gualala River",
            description: "Gin, pruno, and falernum with a dash of peach bitters and muddled cranberry"
        },
        {
            name: "Clusivity",
            description: "Gin, benedictine, meyer lemon juice, and muddled strawberry"
        },
        {
            name: "European Film Award for Best Actress",
            description: "Gin, red grapefruit juice, simple syrup, grapefruit bitters, and grated cinnamon"
        },
        {
            name: "Thomas Cawton",
            description: "Gin, rupy port, meyer lemon and key lime juices, cointreau, brown sugar, and a dash of grapefruit bitters"
        },
        {
            name: "Dir",
            description: "Gin, simple syrup, meyer lemon and key lime juices, strega, grated nutmeg, and muddled blackberry"
        },
        {
            name: "Bristlecone Pine",
            description: "Gin, ruby port, apple cider, key lime juice, peychaud bitters, mint leaves, and sweet champagne"
        },
        {
            name: "Thomas Carskadon",
            description: "Gin, bourbon, watermelon syrup, and a dash of peach bitters"
        },
        {
            name: "Suristan",
            description: "Gin, white vermouth, with orange, grapefruit, and whiskey bitters"
        },
        {
            name: "Mottle-backed Elaenia",
            description: "Gin, rye, falernum, and a dash of maraschino liqeur"
        },
        {
            name: "Ankerite",
            description: "Gin, ruby port, lemon juice, benedictine, tarragon, and a dash of grapefruit bitters"
        }
    ]

    // shuffles drink list
    for (let i = drinks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = drinks[i];
        drinks[i] = drinks[j];
        drinks[j] = temp;
    }
    return drinks.slice(0, x)

}

// generates random prices with repeats
function priceGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// generates cards with details for dishes
function generateDish(x) {
    if (x.name != null) {
        var name = x.name;
    }
    var text = x.description;
    var price = x.price;
    var id = x.id;
    return (
        <div className="col-md-3" key={id} id={id}>
            <div className="card h-100">
                <div className="card-body">
                    <h5>{name}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text text-right">${price}</p>
                </div>
            </div>
        </div>
    )
}


// renders all menu sections together
function Menu() {
    return (
        <div className="bg-light" id="Menu">
            <Breakfast />
            <Appetize />
            <Lunch />
            <Dinner />
            <Cocktails />
            <Desert />
        </div>
    )

}


// generates the list of appetizers
class Appetize extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localMenu: [] }
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("appetizers"));
        if (prevMenu === null) {
            var newMenu = (await phoneHome(8));
            newMenu.forEach((x) => {
                x.id = "app" + newMenu.indexOf(x);
                x.price = priceGenerator(5, 10)
            });
            var currentMenu = newMenu;
        }
        else {
            currentMenu = prevMenu
        }
        if (prevMenu === null) {
            await localStorage.setItem("appetizers", JSON.stringify(currentMenu))
        }
        await this.setState({
            localMenu: currentMenu
        })
    }


    render() {



        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <h3 className="navbar-text mx-auto text-light mb-0">Appetizers</h3>
                        </nav>
                        <div className="border border-primary mt-0">
                            <div className="container mt-4">
                                <div className="row mb-4">
                                    {this.state.localMenu.map(x => (generateDish(x)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
// generates the list of deserts
class Desert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localMenu: [] }
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("desert"));
        if (prevMenu === null) {
            var newMenu = (await phoneHome(8));
            newMenu.forEach((x) => {
                x.id = "app" + newMenu.indexOf(x);
                x.price = priceGenerator(4, 9)
            });
            var currentMenu = newMenu;
        }
        else {
            currentMenu = prevMenu
        }
        if (prevMenu === null) {
            await localStorage.setItem("desert", JSON.stringify(currentMenu))
        }
        await this.setState({
            localMenu: currentMenu
        })
    }


    render() {



        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <h3 className="navbar-text mx-auto text-light mb-0">Deserts</h3>
                        </nav>
                        <div className="border border-primary mt-0 mb-4">
                            <div className="container mt-4">
                                <div className="row mb-4">
                                    {this.state.localMenu.map(x => (generateDish(x)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
// generates the list of dinner items
class Dinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localMenu: [] }
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("dinner"));
        if (prevMenu === null) {
            var newMenu = (await phoneHome(16));
            newMenu.forEach((x) => {
                x.id = "app" + newMenu.indexOf(x);
                x.price = priceGenerator(9, 20)
            });
            var currentMenu = newMenu;
        }
        else {
            currentMenu = prevMenu
        }
        if (prevMenu === null) {
            await localStorage.setItem("dinner", JSON.stringify(currentMenu))
        }
        await this.setState({
            localMenu: currentMenu
        })
    }


    render() {



        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <h3 className="navbar-text mx-auto text-light mb-0">Dinner</h3>
                        </nav>
                        <div className="border border-primary mt-0">
                            <div className="container mt-4">
                                <div className="row mb-4">
                                    {this.state.localMenu.map(x => (generateDish(x)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
// generates the list of lunch items
class Lunch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localMenu: [] }
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("lunch"));
        if (prevMenu === null) {
            var newMenu = (await phoneHome(12));
            newMenu.forEach((x) => {
                x.id = "app" + newMenu.indexOf(x);
                x.price = priceGenerator(8, 15)
            });
            var currentMenu = newMenu;
        }
        else {
            currentMenu = prevMenu
        }
        if (prevMenu === null) {
            await localStorage.setItem("lunch", JSON.stringify(currentMenu))
        }
        await this.setState({
            localMenu: currentMenu
        })
    }


    render() {



        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <h3 className="navbar-text mx-auto text-light mb-0">Lunch</h3>
                        </nav>
                        <div className="border border-primary mt-0">
                            <div className="container mt-4">
                                <div className="row mb-4">
                                    {this.state.localMenu.map(x => (generateDish(x)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

// generates the list of breakfast items
class Breakfast extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localMenu: [] }
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("breakfast"));
        if (prevMenu === null) {
            var newMenu = (await phoneHome(12));
            newMenu.forEach((x) => {
                x.id = "app" + newMenu.indexOf(x);
                x.price = priceGenerator(8, 14)
            });
            var currentMenu = newMenu;
        }
        else {
            currentMenu = prevMenu
        }
        if (prevMenu === null) {
            await localStorage.setItem("breakfast", JSON.stringify(currentMenu))
        }
        await this.setState({
            localMenu: currentMenu
        })
    }


    render() {



        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <h3 className="navbar-text mx-auto text-light mb-0">Breakfast</h3>
                        </nav>
                        <div className="border border-primary mt-0">
                            <div className="container mt-4">
                                <div className="row mb-4">
                                    {this.state.localMenu.map(x => (generateDish(x)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


class Cocktails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { localMenu: [] }
    }

    // checks for local data, assigns menu items an ID and a price, sets state
    async componentDidMount() {
        var prevMenu = JSON.parse(window.localStorage.getItem("cocktails"));
        if (prevMenu === null) {
            var newMenu = (await makeDrinks(4));
            newMenu.forEach((x) => {
                x.id = "app" + newMenu.indexOf(x);
                x.price = priceGenerator(4, 10)
            });
            var currentMenu = newMenu;
        }
        else {
            currentMenu = prevMenu
        }
        if (prevMenu === null) {
            await localStorage.setItem("cocktails", JSON.stringify(currentMenu))
        }
        await this.setState({
            localMenu: currentMenu
        })
    }


    render() {



        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <h3 className="navbar-text mx-auto text-light mb-0">Cocktails</h3>
                        </nav>
                        <div className="border border-primary mt-0">
                            <div className="container mt-4">
                                <div className="row mb-4">
                                    {this.state.localMenu.map(x => (generateDish(x)))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Menu