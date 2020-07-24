export const IS_LOGGED_IN = "IS_LOGGED_IN";
export const IS_TEACHER = "IS_TEACHER";

/**
 * IS_TEACHER is set only after IS_LOGGED_IN, if Teacher => True
 * If Student -> false
 */

export function loggedIn() {
  return {
    type: IS_LOGGED_IN,
    value: true,
  };
}

export function loggedOut() {
  return {
    type: IS_LOGGED_IN,
    value: false,
  };
}

export function setTeacherOrStudent(val) {
  return {
    type: IS_TEACHER,
    value: val,
  };
}
