import axios from "axios";
import i18n from "./i18n";

axios.defaults.baseURL = "https://net-to-shop-warehouse.dev.marvelconnect.com/";

const setAuthHeader = (token) => {
  const { locale } = i18n.global;
  if (token) {
    axios.defaults.headers = {
      Authorization: "Bearer " + token,
      "accept-language": locale,
    };
  } else {
    axios.defaults.headers = {
      "accept-language": locale,
    };
    delete axios.defaults.headers.Authorization;
  }
  console.log("triggered");
};

export default setAuthHeader;
