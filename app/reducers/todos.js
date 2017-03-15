const initialState = {
        todos: ["one", "two", "three"],
        filter:""
};

const ADD_NEW_TODO = "ADD_NEW_TODO";
export function todos(state = initialState.todos, action) {
    switch(action.type) {
        case ADD_NEW_TODO:
            return state.concat(action.todo);
        default:
            return state;
    }
};
const FILTER_TODO_LIST = "FILTER_TODO_LIST";
export function filter(state = initialState.filter, action) {
    switch(action.type) {
        case FILTER_TODO_LIST:
            return action.filterText;
        default:
            return state;
    }
}
