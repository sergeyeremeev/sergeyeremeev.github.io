import { PROJECT_SELECTED } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
    case PROJECT_SELECTED:
        return action.payload;
    default:
        return state;
    }
};
