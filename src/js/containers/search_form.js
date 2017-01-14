import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchRestaurants } from '../actions/search_restaurants';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            postcode: ''
        };

        this.submitData = this.submitData.bind(this);
    }

    submitData(event) {
        // Stop page from refreshing.
        event.preventDefault();
        this.props.searchRestaurants(this.state);
        this.setState({ name: '', address: '', city: '', postcode: '' });
    }

    render() {
        return (
            <form className="form container" onSubmit={this.submitData}>
                <input type="text" placeholder="Restaurant Name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                <input type="text" placeholder="Address" value={this.state.address} onChange={(event) => this.setState({ address: event.target.value })} />
                <input type="text" placeholder="City" value={this.state.city} onChange={(event) => this.setState({ city: event.target.value })} />
                <div>
                    <input type="text" placeholder="Postcode/ZIP" value={this.state.postcode} onChange={(event) => this.setState({ postcode: event.target.value })} />
                    <button type="submit">Submit</button>           
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchRestaurants }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);