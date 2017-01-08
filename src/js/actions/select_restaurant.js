export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';

export function selectRestaurant(restaurant) {
    return {
        type: SELECT_RESTAURANT,
        payload: restaurant
    };
}