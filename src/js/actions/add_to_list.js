export const ADD_TO_LIST = 'ADD_TO_LIST';

export function addToList(restaurant) {
        
    return {
        type: ADD_TO_LIST,
        payload: restaurant
    };
}