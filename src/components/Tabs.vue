<template>
  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="storage" href="/storage">
        <ion-icon :icon="serverOutline"></ion-icon>
        Storage
      </ion-tab-button>
      <ion-tab-button tab="stock-management" href="/stock-management">
        <ion-icon :icon="folderOutline"></ion-icon>
        Management
      </ion-tab-button>
      <ion-tab-button tab="sales-record" href="/sales-record">
        <ion-icon :icon="documentOutline"></ion-icon>
        Sales Record
      </ion-tab-button>
      <ion-tab-button tab="profile" href="/profile">
        <ion-icon :icon="menuOutline"></ion-icon>
        Menu
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  serverOutline,
  folderOutline,
  documentOutline,
  menuOutline,
} from "ionicons/icons";

export default {
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
  },
  data() {
    return {
      serverOutline,
      folderOutline,
      documentOutline,
      menuOutline,
    };
  },
};
</script>

<style scoped>
ion-tabs {
  z-index: 9999 !important;
}

ion-tab-button {
  color: #c9cdd4;
  font-family: var(--ion-font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  background: var(--ion-color-primary-contrast);
  white-space: nowrap;
}

ion-tab-button.tab-selected {
  color: var(--ion-text-color-primary-contrast);
}
</style>