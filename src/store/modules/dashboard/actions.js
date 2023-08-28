import axios from "axios";

export default {
  async getWarehouseItems(context) {
    const response = await axios.get("api/v1/warehouses/items");
    context.commit("SET_WAREHOUSE_ITEMS", response.data.items);
  },
  async getSalesRecord(context) {
    const response = await axios.get("api/v1/transactions/sales-record");
    context.commit("SET_SALES_RECORD", response.data.items);
  },
  async getItemCategories(context) {
    const response = await axios.get("api/v1/items/categories");
    context.commit("SET_ITEM_CATEGORIES", response.data.items);
  },
  async getItemItems(context, payload) {
    const response = await axios.get("api/v1/items/items", {
      params: {
        filter: payload ? `category:${payload}` : undefined,
      },
    });
    context.commit("SET_ITEM_ITEMS", response.data.items);
  },
  async getTransactionTypes(context) {
    const response = await axios.get("api/v1/transactions/types");
    context.commit("SET_TRANSACTION_TYPES", response.data.items);
  },
  async getWarehouses(context) {
    const response = await axios.get("api/v1/warehouses");
    context.commit("SET_WAREHOUSES", response.data.items);
  },
  async addStock(_, payload) {
    await axios.post("api/v1/transactions/import", payload);
  },
  async getTransactions(context) {
    const response = await axios.get("/api/v1/transactions");
    context.commit("SET_TRANSACTIONS", response.data.items);
  },
  async addTransaction(_, payload) {
    await axios.post("/api/v1/transactions", payload);
  },
  async getStocktakes(context) {
    const response = await axios.get("/api/v1/stocktakes");
    context.commit("SET_STOCKTAKES", response.data.items);
  },
  async updateStock(_, payload) {
    await axios.put(`/api/v1/stocktakes/${payload.id}`, payload.data);
  },
};
