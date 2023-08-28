<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="id"
            disabled
            :placeholder="$t('auth.id')"
            required
          ></base-input>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="email"
            disabled
            :placeholder="$t('auth.email')"
            required
          ></base-input>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <div :class="{ error: v$.username.$errors.length }">
            <base-input
              v-model="username"
              :placeholder="$t('auth.username')"
              required
            ></base-input>
          </div>
        </div>
        <div
          class="input-errors"
          v-for="error of v$.username.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </ion-item>
    </ion-list>
    <base-button @click="submit">{{ $t("dashboard.save_button") }}</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
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
      id: "19729461",
      email: "chantaiman@mail.com",
      username: "",
    };
  },
  validations() {
    return {
      username: { required, minLength: minLength(4) },
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
        username: this.username,
      };

      this.$store
        .dispatch("auth/updateUser", {
          id: this.userDetails.id,
          data,
        })
        .then(() => {
          this.presentToast(this.$t("message.information_updated"), "success");
        })
        .catch((err) => {
          this.presentToast(err.response.data.message, "warning");
        });
    },
  },
  created() {
    console.log(this.userDetails);
    this.id = this.userDetails.id;
    this.email = this.userDetails.email;
    this.username = this.userDetails.username;
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