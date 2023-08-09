<template>
  <base-layout
    page-title="Management"
    page-back-link="/stock-management"
    :add-padding="true"
  >
    <form>
      <ion-list>
        <ion-item lines="none">
          <base-input placeholder="Date"></base-input>
        </ion-item>
        <ion-item lines="none">
          <ion-select
            :toggle-icon="chevronDown"
            placeholder="Item Category"
          ></ion-select>
        </ion-item>
        <ion-item lines="none">
          <ion-select
            :toggle-icon="chevronDown"
            placeholder="Item Name"
          ></ion-select>
        </ion-item>
        <ion-item lines="none">
          <ion-select
            :toggle-icon="chevronDown"
            placeholder="Bin Location Code"
          ></ion-select>
        </ion-item>
        <ion-item lines="none">
          <ion-select
            :toggle-icon="chevronDown"
            placeholder="Transaction Type"
          ></ion-select>
        </ion-item>
        <ion-item lines="none">
          <base-input placeholder="Quantity"></base-input>
          <small
            >If you need to deduct, please add "-" (minus) in front. e.g.:
            -300</small
          >
        </ion-item>
        <ion-item lines="none">
          <ion-textarea placeholder="Remark"></ion-textarea>
        </ion-item>
        <!-- <ion-item lines="none"> -->
        <base-button>Save</base-button>
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
} from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { chevronDown } from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
    IonTextarea,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      chevronDown,
      username: "",
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    };
  },
  validations() {
    return {
      username: { required, minLength: minLength(4) },
      password: {
        password: {
          required,
          minLength: minLength(6),
        },
        confirm: {
          required,
          sameAs: sameAs(this.password.password),
        },
      },
      email: { required, email },
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const data = {
        username: this.username,
        password: this.password.password,
        password2: this.password.confirm,
        phone: this.phone,
        email: this.email,
      };
      console.log(data);
      // this.$store.commit("auth/SET_SIGNUP_DATA", data);
      // this.$router.push("/create-account-2");
    },
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
</style>