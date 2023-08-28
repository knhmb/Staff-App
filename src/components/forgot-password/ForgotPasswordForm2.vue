<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.password.$errors.length }">
            <base-input
              type="password"
              v-model="password"
              :placeholder="$t('auth.new_password')"
            ></base-input>
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
        <div class="input-content">
          <div :class="{ error: v$.confirmPassword.$errors.length }">
            <base-input
              type="password"
              v-model="confirmPassword"
              :placeholder="$t('auth.confirm_password')"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.confirmPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">{{ $t("auth.reset_password") }}</base-button>
  </form>
</template>
    
    <script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import utils from "../../mixins/spinner";

export default {
  mixins: [utils],
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
      password: "",
      confirmPassword: "",
    };
  },
  validations() {
    return {
      password: {
        required,
        minLength: minLength(6),
      },
      confirmPassword: {
        required,
        sameAs: sameAs(this.password),
      },
    };
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      // perform async actions
      const loading = await this.showLoading();
      loading.present();
      const data = {
        email: this.email,
        password: this.password,
        password2: this.confirmPassword,
      };
      this.$store
        .dispatch("auth/resetPassword", data)
        .then(() => {
          loading.dismiss();
          this.presentToast(this.$t("message.password_changed"), "success");
          this.$router.replace("/login");
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