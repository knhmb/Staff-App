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
      <div class="item" v-for="item in 6" :key="item">
        <div class="left">
          <p>2023-04-11</p>
          <p class="name">Name_1</p>
          <p>C123123123 / Category_1</p>
        </div>
        <div class="right">
          <div class="text">
            <p class="name">999</p>
            <p>Tra9981998199</p>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

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