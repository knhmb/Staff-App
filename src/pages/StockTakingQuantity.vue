<template>
  <base-layout
    v-if="singleStock"
    page-title="Stocktaking"
    :add-padding="true"
    page-back-link="/stock-taking"
  >
    <p>
      Location: <span>{{ singleStock.resources.warehouseItem.warehouse }}</span>
    </p>
    <div class="card">
      <div class="item">
        <p>Item Name</p>
        <p>{{ singleStock.resources.itemItem.name }}</p>
      </div>
      <div class="item">
        <p>Item Category</p>
        <p>{{ singleStock.resources.itemItem.category }}</p>
      </div>
      <div class="item">
        <p>Item Code</p>
        <p>{{ singleStock.resources.itemItem.code }}</p>
      </div>
    </div>
    <base-input v-model="quantity" placeholder="Quantity"></base-input>
    <base-button>Continue</base-button>
    <base-button id="open-delete-dialog" class="complete">Complete</base-button>
    <confrim-stock-dialog></confrim-stock-dialog>
  </base-layout>
</template>

<script>
// import { useVuelidate } from "@vuelidate/core";
// import { required } from "@vuelidate/validators";
import ConfrimStockDialog from "../components/account/ConfrimStockDialog.vue";
import utils from "../../mixins/spinner";

export default {
  mixins: [utils],
  components: {
    ConfrimStockDialog,
  },
  // setup() {
  //   return { v$: useVuelidate() };
  // },
  data() {
    return {
      quantity: "",
    };
  },
  // validations() {
  //   return {
  //     quantity: { required },
  //   };
  // },
  computed: {
    stocktakes() {
      return this.$store.getters["dashboard/stocktakes"];
    },
    singleStock() {
      return this.stocktakes.find(
        (item) => item.resources.itemItem.code === this.$route.query.location
      );
    },
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        quantity: this.quantity,
      };

      if (!this.quantity) {
        this.presentToast("Please enter a quantity", "warning");
        return;
      }

      if (typeof this.quantity !== "number") {
        this.presentToast("Please enter a valid number", "warning");
        return;
      }

      // this.$store.dispatch('dashboard/updateStock', {id: this.singleStock.id, data})
    },
  },
  created() {
    console.log(this.stocktakes);
    if (!this.singleStock) {
      this.presentToast("Item not found", "warning");
      this.$router.replace("/stock-taking");
    }
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