<template>
  <base-layout
    page-title="Stock Management"
    :add-padding="true"
    :add-button="true"
  >
    <div class="card">
      <div class="item" @click="$router.push('/stock-management/1')">
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
      <div class="item" v-for="item in 7" :key="item">
        <div class="left">
          <p>2023-04-11</p>
          <p class="name">Name_1</p>
          <p>Category_1</p>
        </div>
        <div class="right">
          <div class="text">
            <p class="name">Stock In / 999</p>
            <p>A380</p>
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