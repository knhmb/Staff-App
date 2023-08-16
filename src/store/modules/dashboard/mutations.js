export default {
  SET_WAREHOUSE_ITEMS(state, payload) {
    state.warehouseItems = payload;
  },
  SET_SALES_RECORD(state, payload) {
    state.salesRecord = payload;
  },
  SET_ITEM_CATEGORIES(state, payload) {
    state.itemCategories = payload;
  },
  SET_TRANSACTION_TYPES(state, payload) {
    state.transactionTypes = payload;
  },
  SET_ITEM_ITEMS(state, payload) {
    state.itemItems = payload;
  },
  SET_WAREHOUSES(state, payload) {
    state.warehouses = payload;
  },
  SET_SELECTED_WAREHOUSE(state, payload) {
    state.selectedWarehouse = payload;
  },
};
