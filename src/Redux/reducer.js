import * as actionType from "./actions";

const initialState = {
  isLoggedIn: false,
  isTeacher: false,
};

function red(state = initialState, action) {
  switch (action.type) {
    case actionType.IS_LOGGED_IN: {
      return Object.assign({}, state, {
        isLoggedIn: action.value,
      });
    }

    case actionType.IS_TEACHER: {
      return Object.assign({}, state, {
        isTeacher: action.value,
      });
    }

    default:
      return state;
  }
}

export default red;
