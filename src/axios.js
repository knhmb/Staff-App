import axios from "axios";

axios.defaults.baseURL = "https://net-to-shop-warehouse.dev.marvelconnect.com/";

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export default setAuthHeader;
