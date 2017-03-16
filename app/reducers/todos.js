const initialState = {
        todos: [{
            title: "one",
            description: "one description"
        },{
            title: "two",
            description: "two description"
        },{
            title: "three",
            description: "three description"
        }],
        filter:""
};

const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export function todos(state = initialState.todos, action) {
    console.log("action", action)
    switch(action.type) {
        case ADD_TODO_ITEM:
            return state.concat(action.value);
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
