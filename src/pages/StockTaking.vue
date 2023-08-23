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
          v-model="itemWarehouse"
        >
          <ion-select-option
            v-for="item in warehouses"
            :key="item.id"
            :value="item.id"
            >{{ item.code }}</ion-select-option
          >
        </ion-select>
      </div>
    </div>
    <base-button @click="startScan">Continue</base-button>
  </base-layout>
</template>
  
  <script>
import {
  IonImg,
  IonSelect,
  IonSelectOption,
  toastController,
} from "@ionic/vue";
import { searchOutline } from "ionicons/icons";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export default {
  components: {
    IonImg,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return { searchOutline, itemWarehouse: "" };
  },
  computed: {
    warehouses() {
      return this.$store.getters["dashboard/warehouses"];
    },
  },
  methods: {
    async startScan() {
      if (!this.itemWarehouse) {
        this.presentToast("Please select a location", "warning");
        return;
      }
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content);
        // this.$store.commit("dashboard/SET_SCANNED_PRODUCT_ID", result.content);
        this.$store.dispatch("dashboard/getStocktakes").then(() => {
          this.$router.push({ name: "StockTakingQuantity" });
          // this.$router.push(`/stock-taking/${result.content}`);
        });
      }
    },
    async presentToast(message, color) {
      const toast = await toastController.create({
        message: message,
        duration: 1500,
        position: "top",
        color: color,
      });

      await toast.present();
    },
  },

  mounted() {
    const select = document.querySelector("ion-select");

    select.interfaceOptions = {
      cssClass: "custom-popover",
    };
  },
  // created() {
  //   this.$store.dispatch("dashboard/getStocktakes");
  // },
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