<template>
  <ion-modal id="example-modal" ref="modal" trigger="open-delete-dialog">
    <div class="wrapper">
      <h4>{{ $t("dashboard.complete_stocktaking") }}</h4>
      <p>{{ $t("dashboard.stock_taking_question") }}</p>
      <div class="btn-content">
        <base-button @click="cancel">{{
          $t("dashboard.no_button")
        }}</base-button>
        <base-button @click="confirm">{{
          $t("dashboard.yes_button")
        }}</base-button>
      </div>
    </div>
  </ion-modal>
</template>
  
  <script>
import { IonModal, IonButton, modalController } from "@ionic/vue";

export default {
  components: {
    IonModal,
    IonButton,
  },
  computed: {
    userDetails() {
      return this.$store.getters["auth/userDetails"];
    },
  },
  methods: {
    cancel() {
      return modalController.dismiss("null", "confirm");
    },
    confirm() {
      this.$emit("updateStock");
      return modalController.dismiss("null", "confirm");
      // this.$store
      //   .dispatch("auth/deleteAccount", this.userDetails.id)
      //   .then(() => {
      //     this.$router.replace("/");
      //     return modalController.dismiss("null", "confirm");
      //   });
    },
  },
};
</script>
  
  <style scoped>
ion-modal#example-modal {
  --width: fit-content;
  --max-width: 260px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --background: var(--ion-color-primary-contrast);
}

ion-modal#example-modal h4 {
  color: var(--ion-text-color-primary);
  text-align: left;
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

ion-modal#example-modal p,
ion-modal#example-modal h4 {
  margin: 20px 20px 10px 20px;
}

ion-modal#example-modal p {
  color: #4e5969;
  text-align: left;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

ion-modal#example-modal ion-button {
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  --color: var(--ion-text-color-primary-contrast);
  background: none;
  border: none;
}

ion-modal#example-modal ion-button::part(native) {
  background: none;
  border: none;
}

ion-modal#example-modal ion-button::part(native) {
  /* width: 100%; */
  /* margin-left: auto;
  margin-right: 20px; */
}

ion-modal#example-modal .wrapper {
  margin-bottom: 10px;
}
</style>