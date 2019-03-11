import { SKILL_SELECTED } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
    case SKILL_SELECTED:
        return action.payload;
    default:
        return state;
    }
};
