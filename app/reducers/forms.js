const REGISTER_NEW_FORM = "REGISTER_NEW_FORM";
const WRITE_FIELD_VALUE = "WRITE_FIELD_VALUE";
export function registerForm(state = {}, action) {
    switch(action.type) {
        case REGISTER_NEW_FORM:
            return {[action.formName]: {values:{}}};
        case WRITE_FIELD_VALUE:
            return {
                [action.formName]: {
                    values: {
                        ...state[action.formName].values,
                        [action.fieldName]: action.value
                    }
                }
            };
        default:
            return state;
    }
}
