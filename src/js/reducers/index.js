import { combineReducers } from 'redux';

import AllRestaurantsReducer from './reducer_all_restaurants';
import RestaurantDetailsReducer from './reducer_restaurant_details';
import RestaurantListReducer from './reducer_restaurant_list';

const rootReducer = combineReducers({
    allRestaurants: AllRestaurantsReducer,
    restaurantDetails: RestaurantDetailsReducer,
    restaurantList: RestaurantListReducer
});

export default rootReducer;