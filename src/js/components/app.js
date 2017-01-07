import React, { Component } from 'react';

import Map from '../containers/map';
import RestaurantDetails from '../containers/restaurant_details';
import RestaurantList from '../containers/restaurant_list';

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <h1 className="title">Restaurant Finder</h1>
                <div className="main">
                    <Map />
                    <RestaurantDetails />
                    <RestaurantList />
                </div>
                <footer className="footer">
                    Coded by <a href="https://github.com/matt2112" target="_blank">Matt Lewis</a>
                </footer>
            </div>
        );
    }
}

export default App;