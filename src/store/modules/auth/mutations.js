import setAuthHeader from "../../../axios";

export default {
  SET_SIGNUP_DATA(state, payload) {
    state.signUpData = payload;
  },
  LOGIN(state, payload) {
    localStorage.setItem("accessToken", payload.accessToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    setAuthHeader(payload.accessToken);
    state.userDetails = payload.item;
  },
  LOGOUT(state) {
    state.userDetails = {};
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
  SET_UPDATED_USER_DETIALS(state, payload) {
    state.userDetails = payload;
  },
};
