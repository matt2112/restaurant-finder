import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToList } from '../actions/add_to_list';

class RestaurantDetails extends Component {
    constructor(props) {
        super(props);

        this.state = { restaurant: 'Silly restaurant' };
    }

    render() {
        return (
            <div className="details">
                <h3>Restaurant details here</h3>
                <button onClick={() => this.props.addToList(this.state.restaurant)}>Add to list</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToList }, dispatch);
}

export default connect(null, mapDispatchToProps)(RestaurantDetails);