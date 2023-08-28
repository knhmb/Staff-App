import axios from "axios";

export default {
  async signUp(_, payload) {
    const response = await axios.post("api/v1/accounts", payload);
    console.log(response);
  },
  async newAccountOTP(_, payload) {
    await axios.post("api/v1/accounts/new-account-otp", payload);
  },
  async forgotPassword(_, payload) {
    await axios.post("api/v1/accounts/forget-password", payload);
  },
  async login(context, payload) {
    const response = await axios.post("api/v1/authenticate", payload);
    context.commit("LOGIN", response.data);
  },
  async validateUser(context, payload) {
    const response = await axios.get("/api/v1/authenticate", {
      headers: {
        authorization: `Bearer ${payload}`,
      },
    });
    context.commit("LOGIN", response.data);
  },
  async resetPassword(_, payload) {
    await axios.post("api/v1/accounts/reset-password", payload);
  },
  async deleteAccount(_, payload) {
    await axios.delete(`api/v1/accounts/${payload}}`);
  },
  async checkRefreshToken(context, payload) {
    const response = await axios.put(
      "/api/v1/authenticate",
      {},
      {
        headers: {
          authorization: `Bearer ${payload}`,
        },
      }
    );
    context.commit("LOGIN", response.data);
  },
  // async getUserDetails(context, payload) {
  //   const response = await axios.get(`api/v1/accounts/${payload}`);
  //   context.commit("SET_UPDATED_USER_DETIALS", response.data.item);
  // },
  async updateUser(context, payload) {
    const response = await axios.put(
      `api/v1/accounts/${payload.id}`,
      payload.data
    );
    context.commit("SET_UPDATED_USER_DETIALS", response.data.item);
  },
  async logout(context) {
    await axios.delete("api/v1/authenticate");
    context.commit("LOGOUT");
  },
  async verifyOTP(_, payload) {
    await axios.post("api/v1/accounts/verify-otp", payload);
  },
};
