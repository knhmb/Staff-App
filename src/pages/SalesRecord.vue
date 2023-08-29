<template>
  <base-layout page-title="Sales Record" :add-padding="true">
    <div class="card">
      <div class="item">
        <div class="left">
          <p>Date</p>
          <p class="name">Item Name</p>
          <p>Item Code / Item Category</p>
        </div>
        <div class="right">
          <div class="text">
            <p class="name">Quantity</p>
            <p>Transaction ID</p>
          </div>
        </div>
      </div>
      <div class="item" v-for="item in salesRecord" :key="item.id">
        <div class="left">
          <p>{{ item.createdAt }}</p>
          <p class="name">{{ item.resources.itemItem.name }}</p>
          <p>
            {{ item.resources.itemItem.code }} /
            {{ item.resources.itemCategory.name }}
          </p>
        </div>
        <div class="right">
          <div class="text">
            <p class="name">{{ item.quantity }}</p>
            <p>{{ item.transactionId }}</p>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
  computed: {
    salesRecord() {
      return this.$store.getters["dashboard/salesRecord"];
    },
  },
  ionViewWillEnter() {
    this.$store.dispatch("dashboard/getSalesRecord");
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
  padding: 0.5rem 0;
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
  margin: 0;
  margin-bottom: 0.5rem;
}

.card .item .left p.name,
.card .item .right p.name {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: var(--ion-text-color-primary);
}
</style>