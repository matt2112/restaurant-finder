import { ADD_TO_LIST } from '../actions/add_to_list';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_TO_LIST:
            return [ action.payload, ...state];
    }
    return state;
}