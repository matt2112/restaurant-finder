import { SELECT_RESTAURANT } from '../actions/select_restaurant';

export default function(state = null, action) {
    switch (action.type) {
        case SELECT_RESTAURANT:
            return action.payload;
    }
    return state;
}