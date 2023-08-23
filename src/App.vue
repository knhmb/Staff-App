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
  methods: {
    checkRefreshToken() {
      const token = localStorage.getItem("refreshToken");

      this.$store
        .dispatch("auth/checkRefreshToken", token)
        .then(() => {})
        .catch(() => {
          this.$store.commit("auth/LOGOUT");
          this.$router.replace("/login");
        });
    },
  },
  created() {
    const token = localStorage.getItem("accessToken");
    this.$store
      .dispatch("auth/validateUser", token)
      .then(() => {
        // this.$store.commit("auth/SET_USER_VALIDITY");
      })
      .catch(() => {
        this.checkRefreshToken();
      });
  },
};
</script>
