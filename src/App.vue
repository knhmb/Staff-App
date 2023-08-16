<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";

export default {
  components: {
    IonApp,
    IonRouterOutlet,
  },
  created() {
    const token = localStorage.getItem("accessToken");
    this.$store
      .dispatch("auth/validateUser", token)
      .then(() => {
        // this.$store.commit("auth/SET_USER_VALIDITY");
      })
      .catch(() => {
        this.$store.commit("auth/LOGOUT");
        this.$router.replace("/login");
      });
  },
};
</script>
