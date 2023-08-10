<template>
  <base-layout page-title="Stocktaking">
    <div class="banner">
      <ion-img src="/assets/Featured-Products-1.png"></ion-img>
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
    <base-button @click="startScan">Continue</base-button>
  </base-layout>
</template>
  
  <script>
import { IonImg, IonSelect, IonSelectOption } from "@ionic/vue";
import { searchOutline } from "ionicons/icons";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export default {
  components: {
    IonImg,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return { searchOutline };
  },
  methods: {
    async startScan() {
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content);
        this.$router.push("/stock-taking/1");
      }
    },
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