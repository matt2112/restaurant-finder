export const SEARCH_RESTAURANTS = 'SEARCH';

export function searchRestaurants(request) {
    console.log(request);
    return {
        type: SEARCH_RESTAURANTS,
        payload: request
    }
}