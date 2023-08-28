<template>
  <base-layout
    page-title="Management"
    page-back-link="/stock-management"
    :add-padding="true"
    :add-action-buttons="true"
  >
    <div class="card">
      <div class="item">
        <p>Date</p>
        <p>{{ selectedTransaction.createdAt }}</p>
      </div>
      <div class="item">
        <p>Item Name</p>
        <p>
          {{
            selectedTransaction.resources.itemItem
              ? selectedTransaction.resources.itemItem.name
              : "N/A"
          }}
        </p>
      </div>
      <div class="item">
        <p>Item Category</p>
        <p>
          {{
            selectedTransaction.resources.itemCategory
              ? selectedTransaction.resources.itemCategory.name
              : "N/A"
          }}
        </p>
      </div>
      <div class="item">
        <p>Item Code</p>
        <p>
          {{
            selectedTransaction.resources.itemItem
              ? selectedTransaction.resources.itemItem.code
              : "N/A"
          }}
        </p>
      </div>
      <div class="item">
        <p>Bin Location (Warehouse) code</p>
        <p>{{ selectedTransaction.warehouseItem }}</p>
      </div>
      <div class="item">
        <p>Transaction Type</p>
        <p>
          {{
            selectedTransaction.resources.transactionType
              ? selectedTransaction.resources.transactionType.name
              : "N/A"
          }}
        </p>
      </div>
      <div class="item">
        <p>Quantity</p>
        <p>{{ selectedTransaction.quantity }}</p>
      </div>
      <div class="item">
        <p>Remark</p>
        <p>
          {{ selectedTransaction.remark }}
        </p>
      </div>
      <div class="item">
        <p>Modified by</p>
        <p>
          {{
            selectedTransaction.resources.updatedBy
              ? selectedTransaction.resources.updatedBy.name
              : "N/A"
          }}
        </p>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
  computed: {
    transactions() {
      return this.$store.getters["dashboard/transactions"];
    },
    selectedTransaction() {
      return this.transactions.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 24px;
  background: #fff;
}

.card .item:not(:last-of-type) {
  border-bottom: 1px solid #e5e6eb;
}

.card .item p {
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #86909c;
}

.card .item p:last-of-type {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--ion-text-color-primary);
}
</style>