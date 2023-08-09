<template>
  <base-layout
    page-back-link="/storage"
    page-title="Storage"
    :add-padding="true"
  >
    <p>Location: <span>Location A</span></p>
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
      <div class="item" v-for="item in 7" :key="item">
        <div class="left">
          <p class="name">Name_1</p>
          <p>Category_1</p>
          <p>C123123123</p>
        </div>
        <div class="right">
          <p class="name">999</p>
          <p>A380</p>
        </div>
      </div>
    </div>
  </base-layout>
</template>

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