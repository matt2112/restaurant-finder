import { combineReducers } from 'redux';

import RestaurantListReducer from './reducer_restaurant_list';

const rootReducer = combineReducers({
    restaurantList: RestaurantListReducer
});

export default rootReducer;