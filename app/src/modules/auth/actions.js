export const LOGIN = "LOGIN";
export function login(formName) {
  return function (dispatch, getState) {

    const {form: {[formName]: {values}}} = getState();
    return dispatch({
      type: LOGIN,
      payload: {
        request: {
          method: "post",
          url: "/login",
          data: {
            ...values
          }
        }
      }
    });
  }
}
