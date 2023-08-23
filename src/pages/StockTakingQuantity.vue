<template>
  <base-layout
    page-title="Stocktaking"
    :add-padding="true"
    page-back-link="/stock-taking"
  >
    <p>Location: <span>Location A</span></p>
    <div class="card">
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
    </div>
    <base-input placeholder="Quantity"></base-input>
    <base-button>Continue</base-button>
    <base-button id="open-delete-dialog" class="complete">Complete</base-button>
    <confrim-stock-dialog></confrim-stock-dialog>
  </base-layout>
</template>

<script>
import ConfrimStockDialog from "../components/account/ConfrimStockDialog.vue";

export default {
  components: {
    ConfrimStockDialog,
  },
  computed: {
    stocktakes() {
      return this.$store.getters["dashboard/stocktakes"];
    },
  },
  created() {
    console.log(this.stocktakes);
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
  margin: 0;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.card .item p:last-of-type {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: var(--ion-text-color-primary);
}

ion-input {
  margin-top: 1.5rem;
}

ion-button {
  margin-top: 1rem;
}

ion-button.complete::part(native) {
  background: #00b42a;
}
</style>