import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      warehouseItems: [],
      salesRecord: [],
      itemCategories: [],
      transactionTypes: [],
      itemItems: [],
      warehouses: [],
      selectedWarehouse: "",
      transactions: [],
      stocktakes: [],
      // scannedProduct: null,
    };
  },
  getters,
  mutations,
  actions,
};
