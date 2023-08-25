<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.currentPassword.length }">
            <base-input
              v-model="currentPassword"
              placeholder="Current Password"
              required
              type="password"
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.currentPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.newPassword.length }">
            <base-input
              v-model="newPassword"
              type="password"
              placeholder="New Password"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.newPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.confirmNewPassword.length }">
            <base-input
              type="password"
              v-model="confirmNewPassword"
              placeholder="Confirm New Password"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.confirmNewPassword.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">Reset Password</base-button>
  </form>
</template>
  
  <script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
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
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };
  },
  validations() {
    return {
      currentPassword: { required },
      newPassword: { required, minLength: minLength(6) },
      confirmNewPassword: { required, sameAs: sameAs(this.newPassword) },
    };
  },
  computed: {
    userDetails() {
      return this.$store.getters["auth/userDetails"];
    },
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }

      const data = {
        currentPass: this.currentPassword,
        password: this.newPassword,
        password2: this.confirmNewPassword,
      };

      this.$store
        .dispatch("auth/updateUser", { id: this.userDetails.id, data })
        .then(() => {
          this.presentToast("Password Changed", "success");
        })
        .catch((err) => {
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
</style>