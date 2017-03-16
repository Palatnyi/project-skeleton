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

const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export function addTodoItem(value) {
    return {
        type: ADD_TODO_ITEM,
        value
    }
}

const REGISTER_NEW_FORM = "REGISTER_NEW_FORM";
export function registerForm(formName) {
    return {
        type:REGISTER_NEW_FORM,
        formName
    };
}

const WRITE_FIELD_VALUE = "WRITE_FIELD_VALUE";
export function writeField(formName, fieldName, value){
    return {
        type: WRITE_FIELD_VALUE,
        formName, fieldName, value
    }
}