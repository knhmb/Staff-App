<template>
  <base-layout :hide-header="true" :hide-footer="true" :add-padding="true">
    <language></language>
    <ion-img src="/assets/logo.png"></ion-img>
    <p>{{ $t("auth.login_to_account") }}</p>
    <login-form></login-form>
  </base-layout>
</template>

<script>
import { IonImg } from "@ionic/vue";
import LoginForm from "../components/login/LoginForm.vue";
import Language from "../components/base/Language.vue";

export default {
  components: {
    IonImg,
    LoginForm,
    Language,
  },
  // data() {
  //   return {
  //     currentLang: "eng",
  //   };
  // },
  // methods: {
  //   setOption(option) {
  //     this.currentLang = option;
  //   },
  // },
};
</script>

<style scoped>
.language {
  margin-top: 3rem;
  width: 100%;
  height: 3rem;
  border-radius: 24px;
  border: 1px solid var(--ion-text-color-primary-contrast);
  display: flex;
  align-items: center;
}

.language div {
  width: 100%;
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ion-text-color-primary-contrast);
  height: 100%;
  transition: all 0.3s;
}

.language div.left {
  border-radius: 24px 0 0 24px;
}
.language div.right {
  border-radius: 0 24px 24px 0;
}

.language div.is-selected {
  background: var(--ion-text-color-primary-contrast);
  color: #fff;
}

ion-img {
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
}

p {
  color: var(--ion-text-color-primary-contrast);
  font-family: PingFang SC;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;

  margin-top: 0.5rem;
}
</style>