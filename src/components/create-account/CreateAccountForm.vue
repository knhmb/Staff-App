<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.username.$errors.length }">
            <base-input
              v-model="username"
              :placeholder="$t('auth.username')"
              required
            ></base-input>
          </div>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.username.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.email.$errors.length }">
            <base-input
              v-model="email"
              :placeholder="$t('auth.email')"
            ></base-input>
          </div>
          <ion-icon type="email" slot="start" :icon="mailOutline"></ion-icon>
          <p class="otp" @click="sendOtp">{{ $t("auth.send_otp") }}</p>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.password.password.$errors.length }">
            <base-input
              v-model="password.password"
              :placeholder="$t('auth.password')"
              type="password"
            ></base-input>
          </div>
          <ion-icon slot="start" :icon="keyOutline"></ion-icon>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.password.confirm.$errors.length }">
            <base-input
              v-model="password.confirm"
              :placeholder="$t('auth.confirm_password')"
              type="password"
            ></base-input>
          </div>
          <ion-icon slot="start" :icon="keyOutline"></ion-icon>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.confirm.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">{{ $t("auth.create_account") }}</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
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
.input-content {
  position: relative;
  width: 100%;
}

ion-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

ion-item::part(native) {
  display: flex;
  flex-direction: column;
}

.input-errors {
  width: 100%;
  text-align: start;
}

p.otp {
  color: var(--ion-text-color-primary-contrast);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
  z-index: 99;
  margin: 0;
  cursor: pointer;
}
</style>