import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectRestaurant } from '../actions/select_restaurant';

class Map extends Component {

    displayRestaurants() {
        return this.props.restaurants.map((restaurant) => {
            return (
                <li
                    key={restaurant.id}>
                    <h4>{restaurant.name}</h4>
                    <button onClick={() => this.props.selectRestaurant(restaurant)}>Show details</button>   
                </li>
            );
        });
    }

    render() {
        return (
            <div className="map container">
                <h3>Map Here</h3>
                <ul>
                    {this.displayRestaurants()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurants: state.allRestaurants
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectRestaurant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);