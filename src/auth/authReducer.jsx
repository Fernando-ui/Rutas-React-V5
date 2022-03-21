import { ACTION } from "../actions/actions";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return {
        ...action.payload,

        logged: true,
      };
    case ACTION.LOGOUT:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
