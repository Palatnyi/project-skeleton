/**
 * Created by andrew on 3/15/2017.
 */

const FILTER_TODO_LIST = "FILTER_TODO_LIST";
export function filterToDoList(filterText) {
    return {
        type: FILTER_TODO_LIST,
        filterText
    }
}