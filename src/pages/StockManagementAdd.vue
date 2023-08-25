<template>
  <base-layout
    page-title="Management"
    page-back-link="/stock-management"
    :add-padding="true"
  >
    <form>
      <ion-list>
        <ion-item lines="none">
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
        </ion-item>
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
                :value="item"
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
import utils from "../../mixins/spinner";

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
      date: { required },
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
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        date: this.date,
        item: this.itemCategory,
        warehouseItem: this.itemName,
        warehouse: this.locationCode,
        transactionType: this.transactionType.id,
        transactionId: this.transactionType.name,
        remark: this.remark,
        quantity: this.quantity,
      };
      this.$store
        .dispatch("dashboard/addTransaction", data)
        .then(() => {
          this.presentToast("Added Successfully", "success");

          this.$store.dispatch("dashboard/getTransactions").then(() => {
            this.$router.replace("/stock-management");
            this.date = "";
            this.itemCategory = "";
            this.itemName = "";
            this.locationCode = "";
            this.transactionType = "";
            this.remark = "";
            this.quantity = "";
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