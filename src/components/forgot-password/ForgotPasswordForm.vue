<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.email.$errors.length }">
            <base-input
              v-model="email"
              :placeholder="$t('auth.email')"
              required
            ></base-input>
          </div>
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
          <div :class="{ error: v$.otp.$errors.length }">
            <base-input
              type="password"
              v-model="otp"
              :placeholder="$t('auth.otp')"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.otp.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">{{ $t("auth.continue_button") }}</base-button>
  </form>
</template>
  
  <script>
import { IonList, IonItem, IonIcon, toastController } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import ForgotPasswordForm2 from "./ForgotPasswordForm2.vue";
import utils from "../../mixins/spinner";

export default {
  mixins: [utils],
  components: {
    IonList,
    IonItem,
    IonIcon,
    ForgotPasswordForm2,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      otp: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      otp: { required },
    };
  },
  methods: {
    async sendOtp() {
      const result = await this.v$.email.$validate();
      if (!result) {
        return;
      }
      this.$store
        .dispatch("auth/forgotPassword", { username: this.email })
        .then(() => {
          this.presentToast(this.$t("message.otp_sent"), "success");
        })
        .catch((err) => {
          this.presentToast(err.response.data.message, "warning");
        });
    },
    async submit() {
      const result = await this.v$.email.$validate();
      if (!result) {
        return;
      }
      const data = {
        username: this.email,
        resetToken: this.otp,
      };

      this.$store
        .dispatch("auth/verifyOTP", data)
        .then(() => {
          this.$router.push("/reset-password");
        })
        .catch((err) => {
          this.presentToast(err.response.data.message, "warning");
        });
      // const result = await this.v$.$validate();
      // if (!result) {
      //   return;
      // }
      // // perform async actions
      // const data = {
      //   email: this.email,
      //   password: this.password,
      //   password2: this.confirmPassword,
      // };
      // this.$store
      //   .dispatch("auth/resetPassword", data)
      //   .then(() => {
      //     this.presentToast("Password Changed!", "success");
      //     this.$router.replace("/login");
      //   })
      //   .catch((err) => {
      //     this.presentToast(err.response.data.message, "warning");
      //   });
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

ion-item::part(native) {
  display: flex;
  flex-direction: column;
}

.input-errors {
  width: 100%;
  text-align: start;
}
</style>