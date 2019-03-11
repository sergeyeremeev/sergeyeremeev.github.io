import { PROJECT_FOCUSED } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case PROJECT_FOCUSED:
      return action.payload;
    default:
      return state;
  }
};
