import {LOGIN} from "./actions";
const initialState = {
    users: []
};

function auth(state = initialState, action) {
    console.log(action);
    switch(action.type) {
      case `${LOGIN}_SUCCESS`:
        return {
          ...state,
          users: users.concat(action.payload.data)
        };
      default:
          return state;
    }
}

export default auth;

