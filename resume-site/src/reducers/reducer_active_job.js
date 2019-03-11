import { JOB_SELECTED } from '../actions';

export default (state = null, action) => {
    switch (action.type) {
    case JOB_SELECTED:
        return action.payload;
    default:
        return state;
    }
};
