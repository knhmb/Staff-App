<template>
  <base-layout
    page-title="Account"
    :hide-back-button="true"
    :add-padding="true"
  >
    <small>{{ $t("dashboard.setting") }}</small>
    <ion-card>
      <div class="item" @click="$router.push('/edit-profile')">
        <p>{{ $t("menus.edit_profile") }}</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/change-password')">
        <p>{{ $t("menus.change_password") }}</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="logout">
        <p>{{ $t("menus.logout") }}</p>
      </div>
    </ion-card>
    <language></language>
  </base-layout>
</template>

<script>
import { IonIcon, IonCard } from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import Language from "../components/base/Language.vue";

export default {
  components: {
    IonIcon,
    IonCard,
    Language,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.replace("/login");
      });
    },
  },
};
</script>

<style scoped>
ion-content {
  display: flex;
}

small {
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #939aa3;
  margin-bottom: 0.5rem;
  display: block;
}

ion-card {
  margin-top: 0;
  --background: var(--ion-color-primary-contrast);
  box-shadow: none;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --border-color: #e5e6eb;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e5e6eb;
  padding-bottom: 0.5rem;
}

.item:last-of-type {
  border: none;
}

.item p {
  color: var(--ion-text-color-primary);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0.5rem;
}

.item p,
.item ion-icon {
  padding: 0 1rem;
}

ion-icon {
  font-size: 1.2rem;
  color: #c9cdd4;
}

ion-button {
  --background: #f53f3f;
  --background-activated: #eb7b7bc7;
}
</style>