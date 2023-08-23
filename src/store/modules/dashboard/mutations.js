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
  SET_TRANSACTIONS(state, payload) {
    state.transactions = payload;
  },
  SET_STOCKTAKES(state, payload) {
    state.stocktakes = payload;
  },
  // SET_SCANNED_PRODUCT_ID(state, payload) {
  //   state.scannedProduct = payload
  // }
};
