<template>
  <ion-page>
    <ion-header :class="{ 'is-hidden': hideHeader }">
      <ion-toolbar>
        <ion-buttons
          :class="{ 'is-hidden': !addActionButtons }"
          slot="end"
          class="edit-delete"
        >
          <ion-icon @click="edit" :icon="pencilOutline"></ion-icon>
          <ion-icon :icon="trashOutline"></ion-icon>
        </ion-buttons>
        <ion-buttons
          router-link="/stock-management-add"
          slot="end"
          :class="{ 'is-hidden': !addButton }"
        >
          <ion-icon :icon="addCircle"></ion-icon>
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-back-button
            :class="{ 'is-hidden': hideBackButton }"
            text=""
            :default-href="pageBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :class="{ 'ion-padding': addPadding }">
      <slot />
    </ion-content>
    <ion-footer :class="{ 'is-hidden': hideFooter }">
      <ion-toolbar class="footer-toolbar">
        <Tabs />
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonFooter,
  IonIcon,
} from "@ionic/vue";
import { addCircle, pencilOutline, trashOutline } from "ionicons/icons";
import Tabs from "../Tabs.vue";

export default {
  props: [
    "pageTitle",
    "pageBackLink",
    "hideHeader",
    "hideFooter",
    "hideBackButton",
    "addPadding",
    "addButton",
    "addActionButtons",
  ],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    Tabs,
    IonFooter,
    IonIcon,
  },
  data() {
    return { addCircle, pencilOutline, trashOutline };
  },
  methods: {
    edit() {
      this.$router.push({
        name: "StockManagementEdit",
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style scoped>
.is-hidden {
  display: none !important;
}

ion-back-button {
  color: #00427a;
}

ion-icon {
  font-size: 1.4rem;
}

.edit-delete {
  display: flex;
  align-items: center;
}

.edit-delete ion-icon:first-of-type {
  margin-right: 0.7rem;
}
</style>
