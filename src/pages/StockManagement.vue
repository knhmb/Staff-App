<template>
  <base-layout
    page-title="Stock Management"
    :add-padding="true"
    :add-button="true"
  >
    <div class="card">
      <div class="item">
        <div class="left">
          <p>Date</p>
          <p class="name">Item Name</p>
          <p>Item Category</p>
        </div>
        <div class="right">
          <div class="text">
            <p class="name">Transaction Type / Quantity</p>
            <p>Bin Location (Warehouse) code</p>
          </div>

          <div class="icon">
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </div>
        </div>
      </div>
      <div
        class="item"
        v-for="item in transactions"
        :key="item.id"
        @click="$router.push('/stock-management/1')"
      >
        <div class="left">
          <p>{{ item.createdAt }}</p>
          <p class="name">
            {{ item.resources.itemItem ? item.resources.itemItem.name : "N/A" }}
          </p>
          <p>
            {{
              item.resources.itemCategory
                ? item.resources.itemCategory.name
                : "N/A"
            }}
          </p>
        </div>
        <div class="right">
          <div class="text">
            <p class="name">
              {{ item.resources.transactionType.name }} / {{ item.quantity }}
            </p>
            <p>{{ item.resources.warehouse.code }}</p>
          </div>

          <div class="icon">
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import { chevronForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";

export default {
  components: {
    IonIcon,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  computed: {
    transactions() {
      return this.$store.getters["dashboard/transactions"];
    },
  },
  created() {
    this.$store.dispatch("dashboard/getTransactions");
  },
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 24px;
  width: 100%;
  padding: 0.3rem 1rem;
}

.card .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #e5e6eb;
}

.card .item:last-of-type {
  border: none;
}

.card .item .right {
  display: flex;
  align-items: center;
}

.card .item .right ion-icon {
  color: #c9cdd4;
  margin-left: 0.3rem;
}

.card .item .left p,
.card .item .right p {
  font-family: var(--ion-font-family);
  letter-spacing: 0em;
  text-align: left;
  font-size: 12px;
  line-height: 17px;
  color: #86909c;
}

.card .item .left p.name,
.card .item .right p.name {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--ion-text-color-primary);
}
</style>