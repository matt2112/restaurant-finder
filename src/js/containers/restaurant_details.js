import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToList } from '../actions/add_to_list';

class RestaurantDetails extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { restaurant: 'Silly restaurant' };
    // }

    render() {

        if (!this.props.restaurant) {
            return (
                <div className="details container">
                    <h3>Restaurant details here</h3>
                    <p>Please select a restaurant.</p>
                </div>
            );
        }
        return (
            <div className="details container">
                <h3>Restaurant details here</h3>
                <p>{this.props.restaurant.name}</p>
                <p>{this.props.restaurant.address}</p>
                <p>{this.props.restaurant.style}</p>                
                <button onClick={() => this.props.addToList(this.props.restaurant)}>Add to list</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurant: state.restaurantDetails
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);