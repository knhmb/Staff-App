<template>
  <base-layout
    page-back-link="/storage"
    page-title="Storage"
    :add-padding="true"
  >
    <p>
      Location: <span>{{ singleWarehouse[0].warehouse }}</span>
    </p>
    <div class="card">
      <div class="item">
        <div class="left">
          <p class="name">Item Name</p>
          <p>Item Category</p>
          <p>Item Code</p>
        </div>
        <div class="right">
          <p class="name">Quantity</p>
          <p>Bin Location (Warehouse) code</p>
        </div>
      </div>
      <div class="item" v-for="item in singleWarehouse" :key="item">
        <div class="left">
          <p class="name">{{ item.resources.item.name }}</p>
          <p>{{ item.resources.itemCategory.name }}</p>
          <p>{{ item.resources.item.code }}</p>
        </div>
        <div class="right">
          <p class="name">{{ item.quantity }}</p>
          <p>{{ item.resources.warehouse.code }}</p>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
  computed: {
    warehouseItems() {
      return this.$store.getters["dashboard/warehouseItems"];
    },
    selectedWarehouse() {
      return this.$store.getters["dashboard/selectedWarehouse"];
    },
    singleWarehouse() {
      if (this.selectedWarehouse) {
        return this.warehouseItems.filter(
          (item) => item.warehouse === this.selectedWarehouse
        );
      }
      return this.warehouseItems;
    },
  },
  created() {
    console.log(this.singleWarehouse);
  },
};
</script>

<style scoped>
p {
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #86909c;
}

p span {
  font-size: 16px;
  line-height: 22px;
  color: var(--ion-text-color-primary);
}

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