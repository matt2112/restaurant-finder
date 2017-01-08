import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantList extends Component {

    renderList() {
        return this.props.restaurants.map((restaurant) => {
            return (
                <li
                    key={restaurant.id}>
                    {restaurant.name}
                </li>
            );
        });
    }    

    render() {
        return (
            <div className="list">
                <h3>Restaurant list here</h3>
                <p>{this.renderList()}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurants: state.restaurantList
    };
}

export default connect(mapStateToProps)(RestaurantList);