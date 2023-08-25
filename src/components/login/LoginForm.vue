<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.email.$errors.length }">
            <base-input
              v-model="email"
              placeholder="Email"
              required
            ></base-input>
          </div>
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
          <div :class="{ error: v$.password.$errors.length }">
            <base-input
              v-model="password"
              placeholder="Password"
              required
              :type="inputType"
            ></base-input>
            <ion-icon @click="changeInputType" :icon="setIcon"></ion-icon>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <p class="forgot-password" @click="$router.push('/forgot-password')">
          Forgot Password?
        </p>
      </ion-item>
      <ion-item lines="none">
        <base-button class="account-btn" @click="submit">Login</base-button>
      </ion-item>
    </ion-list>
  </form>
</template>
  
  <script>
import { IonIcon, IonList, IonItem } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import utils from "../../mixins/spinner";

export default {
  mixins: [utils],
  components: {
    IonIcon,
    IonList,
    IonItem,
    IonIcon,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      setIcon: eyeOutline,
      inputType: "password",
      eyeOutline,
      eyeOffOutline,
    };
  },
  validations() {
    return {
      email: { required },
      password: { required },
    };
  },
  methods: {
    changeInputType() {
      this.setIcon = this.setIcon === eyeOutline ? eyeOffOutline : eyeOutline;
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    async submit() {
      console.log(this.showLoading());
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }

      const loading = await this.showLoading();
      loading.present();

      // perform async actions
      const data = {
        username: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("auth/login", data)
        .then(() => {
          loading.dismiss();
          this.presentToast("LoggedIn!", "success");
          this.$router.replace("/storage");
        })
        .catch((err) => {
          loading.dismiss();
          this.presentToast(err.response.data.message, "warning");
        });
    },
  },
};
</script>
  
  <style scoped>
ion-img {
  margin-top: 3.5rem;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
}

p.forgot-password {
  color: var(--ion-text-color-secondary);
  font-size: 16px;
  text-decoration-line: underline;
  margin-top: 0;
  font-family: var(--ion-font-family);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;
  margin-right: auto;
}

.input-content {
  position: relative;
  width: 100%;
}

ion-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}

ion-list {
  background: none;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  background: none;
}

ion-item::part(native) {
  background: none;
}

ion-item.border-bottom {
  border-bottom: 1px solid #e5e6eb;
}

ion-button {
  width: 100%;
  font-weight: 600;
}

ion-button.account-btn {
  --background: var(--ion-text-color-primary-contrast);
  --border-color: var(--ion-text-color-primary-contrast);
  --border-width: 1px;
  --border-style: solid;
  color: var(--ion-color-primary-contrast);
}

ion-item::part(native) {
  display: flex;
  flex-direction: column;
}

.input-errors {
  width: 100%;
  text-align: start;
}
</style>