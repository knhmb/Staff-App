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
        <p>2023-04-11</p>
      </div>
      <div class="item">
        <p>Item Name</p>
        <p>Name_1</p>
      </div>
      <div class="item">
        <p>Item Category</p>
        <p>Category_1</p>
      </div>
      <div class="item">
        <p>Item Code</p>
        <p>C123123123</p>
      </div>
      <div class="item">
        <p>Bin Location (Warehouse) code</p>
        <p>A380</p>
      </div>
      <div class="item">
        <p>Transaction Type</p>
        <p>Stock In</p>
      </div>
      <div class="item">
        <p>Quantity</p>
        <p>999</p>
      </div>
      <div class="item">
        <p>Remark</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Magna bibendum vel bibendum
          convallis vel nisi.
        </p>
      </div>
      <div class="item">
        <p>Modified by</p>
        <p>Karen Chan</p>
      </div>
    </div>
  </base-layout>
</template>

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