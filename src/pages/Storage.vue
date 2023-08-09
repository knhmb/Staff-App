<template>
  <base-layout page-title="Storage">
    <div class="banner">
      <ion-img src="/assets/Featured-Products.png"></ion-img>
      <div class="content">
        <ion-select
          :toggle-icon="searchOutline"
          class="location"
          label="Location"
          label-placement="floating"
          fill="outline"
          interface="popover"
        >
          <ion-select-option value="locationA">Location A</ion-select-option>
          <ion-select-option value="locationB">Location B</ion-select-option>
          <ion-select-option value="locationC">Location C</ion-select-option>
        </ion-select>
      </div>
    </div>
    <base-button router-link="/storage-list">Continue</base-button>
  </base-layout>
</template>

<script>
import { IonImg, IonSelect, IonSelectOption } from "@ionic/vue";
import { searchOutline } from "ionicons/icons";

export default {
  components: {
    IonImg,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return { searchOutline };
  },
  mounted() {
    const select = document.querySelector("ion-select");

    select.interfaceOptions = {
      cssClass: "custom-popover",
    };
  },
};
</script>

<style scoped>
.banner {
  position: relative;
}

.content {
  padding: 0 1rem;
  position: absolute;
  bottom: -0.3rem;
  width: 100%;
}

ion-select {
  background: #fff;
  padding: 0 1rem;
  border-radius: 8px;
}

ion-button {
  position: absolute;
  bottom: 1rem;
  padding: 0 1rem;
  width: 100%;
}
</style>

<style>
.custom-popover .popover-viewport {
  background: #fff;
}
.radio-checked .radio-inner {
  border-color: red !important;
}
</style>