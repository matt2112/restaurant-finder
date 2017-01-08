import { ADD_TO_LIST } from '../actions/add_to_list';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_TO_LIST:
            // Check that object doesn't already exist in state array.
            const matched = state.filter(obj => obj.id === action.payload.id);
            if (matched.length === 0) {
                return [ action.payload, ...state];
            } else {
                return state;
            }
    }
    return state;
}