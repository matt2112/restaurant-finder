import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestaurantList extends Component {
    render() {
        return (
            <div className="list">
                <h3>Restaurant list here</h3>
                <p>{this.props.restaurantList}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurantList: state.restaurantList
    };
}

export default connect(mapStateToProps)(RestaurantList);