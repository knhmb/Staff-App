<template>
  <base-layout
    page-title="Management"
    page-back-link="/stock-management"
    :add-padding="true"
  >
    <form>
      <ion-list>
        <!-- <ion-item lines="none">
          <div class="full-width" :class="{ error: v$.date.$errors.length }">
            <base-input
              v-model="date"
              type="date"
              placeholder="Date"
            ></base-input>
          </div>
          <div
            class="input-errors"
            v-for="error of v$.date.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item> -->
        <ion-item lines="none">
          <div
            class="full-width"
            :class="{ error: v$.itemCategory.$errors.length }"
          >
            <ion-select
              v-model="itemCategory"
              :toggle-icon="chevronDown"
              placeholder="Item Category"
            >
              <ion-select-option
                v-for="item in itemCategories"
                :key="item.id"
                :value="item.id"
                >{{ item.name }}</ion-select-option
              >
            </ion-select>
          </div>
          <div
            class="input-errors"
            v-for="error of v$.itemCategory.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <ion-item lines="none">
          <div
            class="full-width"
            :class="{ error: v$.itemName.$errors.length }"
          >
            <ion-select
              v-model="itemName"
              :toggle-icon="chevronDown"
              placeholder="Item Name"
            >
              <ion-select-option
                v-for="item in itemItems"
                :key="item.id"
                :value="item.id"
                >{{ item.name }}</ion-select-option
              >
            </ion-select>
          </div>
          <div
            class="input-errors"
            v-for="error of v$.itemName.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <ion-item lines="none">
          <div
            class="full-width"
            :class="{ error: v$.locationCode.$errors.length }"
          >
            <ion-select
              :toggle-icon="chevronDown"
              placeholder="Bin Location Code"
              v-model="locationCode"
            >
              <ion-select-option
                v-for="item in warehouses"
                :key="item.id"
                :value="item.id"
                >{{ item.code }}</ion-select-option
              >
            </ion-select>
          </div>
          <div
            class="input-errors"
            v-for="error of v$.locationCode.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <ion-item lines="none">
          <div
            class="full-width"
            :class="{ error: v$.transactionType.$errors.length }"
          >
            <ion-select
              :toggle-icon="chevronDown"
              placeholder="Transaction Type"
              v-model="transactionType"
            >
              <ion-select-option
                v-for="item in transactionTypes"
                :key="item.id"
                :value="item.id"
                >{{ item.name }}</ion-select-option
              >
            </ion-select>
          </div>
          <div
            class="input-errors"
            v-for="error of v$.transactionType.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <ion-item lines="none">
          <div
            class="full-width"
            :class="{ error: v$.quantity.$errors.length }"
          >
            <base-input v-model="quantity" placeholder="Quantity"></base-input>
          </div>
          <small
            >If you need to deduct, please add "-" (minus) in front. e.g.:
            -300</small
          >
          <div
            class="input-errors"
            v-for="error of v$.quantity.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <ion-item lines="none">
          <div class="full-width" :class="{ error: v$.remark.$errors.length }">
            <ion-textarea v-model="remark" placeholder="Remark"></ion-textarea>
          </div>
          <div
            class="input-errors"
            v-for="error of v$.remark.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <!-- <ion-item lines="none"> -->
        <base-button @click="submit">Save</base-button>
        <!-- </ion-item> -->
      </ion-list>
    </form>
  </base-layout>
</template>
  
  <script>
import {
  IonList,
  IonItem,
  IonIcon,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonDatetime,
} from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { chevronDown } from "ionicons/icons";
import utils from "../mixins/spinner";

export default {
  mixins: [utils],
  components: {
    IonList,
    IonItem,
    IonIcon,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonDatetime,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      chevronDown,
      itemCategory: "",
      date: "",
      itemName: "",
      transactionType: "",
      locationCode: "",
      quantity: "",
      remark: "",
    };
  },
  validations() {
    return {
      itemCategory: { required },
      //   date: { required },
      itemName: { required },
      transactionType: { required },
      remark: { required },
      locationCode: { required },
      quantity: { required },
    };
  },
  watch: {
    itemCategory(newVal) {
      this.$store.dispatch("dashboard/getItemItems", newVal);
    },
  },
  computed: {
    itemCategories() {
      return this.$store.getters["dashboard/itemCategories"];
    },
    itemItems() {
      return this.$store.getters["dashboard/itemItems"];
    },
    transactionTypes() {
      return this.$store.getters["dashboard/transactionTypes"];
    },
    warehouses() {
      return this.$store.getters["dashboard/warehouses"];
    },
    transactions() {
      return this.$store.getters["dashboard/transactions"];
    },
    selectedTransaction() {
      return this.transactions.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
  methods: {
    async submit() {
      console.log("clicked");
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        // date: this.date,
        item: this.itemCategory,
        warehouseItem: this.itemName,
        warehouse: this.locationCode,
        transactionType: this.transactionType,
        transactionId: this.transactionType,
        remark: this.remark,
        quantity: this.quantity,
      };
      console.log(data);
      this.$store
        .dispatch("dashboard/updateTransaction", {
          id: this.$route.params.id,
          data,
        })
        .then(() => {
          this.presentToast(this.$t("message.updated_successfully"), "success");
          this.$store.dispatch("dashboard/getTransactions").then(() => {
            this.$router.replace("/stock-management");
          });
        })
        .catch((err) => {
          this.presentToast(err.response.data.message, "warning");
        });
    },
  },
  created() {
    this.$store.dispatch("dashboard/getItemCategories");
    this.$store.dispatch("dashboard/getItemItems");
    this.$store.dispatch("dashboard/getTransactionTypes");
    console.log(this.selectedTransaction);
    this.quantity = this.selectedTransaction.quantity;
    this.itemCategory = this.selectedTransaction.resources.itemItem
      ? this.selectedTransaction.resources.itemItem.category
      : "";
    this.itemName = this.selectedTransaction.resources.warehouseItem.item;
    this.locationCode = this.selectedTransaction.resources.itemCategory
      ? this.selectedTransaction.resources.warehouseItem.warehouse
      : "";
    this.transactionType = this.selectedTransaction.transactionType;
    this.remark = this.selectedTransaction.remark;
    // this.date = new Date(this.selectedTransaction.createdAt);
  },
};
</script>
  
  <style scoped>
form {
  margin: 1rem 0;
}

small {
  color: #86909c;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0.3rem;
}

ion-textarea {
  padding: 0.3rem 1rem;
}

ion-select {
  padding: 0 1rem;
}

ion-select::part(icon) {
  width: 1rem;
}

ion-select::part(container) {
  justify-content: space-between;
  width: 100%;
}

ion-button {
  width: 100%;
  margin-top: 2rem;
}

ion-item {
  --inner-padding-end: 0;
}

ion-item::part(native) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

.input-errors {
  width: 100%;
  text-align: start;
}

div.full-width {
  width: 100%;
}
</style>