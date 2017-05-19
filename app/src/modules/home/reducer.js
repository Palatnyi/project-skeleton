import * as ACTIONS from "./actions.js";

const initialState = {
    counter: 0
};

function homeReducer(state = initialState, action) {
    switch(action.type) {
      case ACTIONS.INCREMENT :
        return {
          ...state,
          counter: parseInt(state.counter) + parseInt(action.value)
        };
      case ACTIONS.DECREMENT :
        return {
          ...state,
          counter: parseInt(state.counter) - parseInt(action.value)
        };
      default:
        return state;
    }
}

export default homeReducer;