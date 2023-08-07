<template>
  <base-layout
    :add-padding="true"
    page-title="Reset Password"
    page-back-link="/forgot-password"
    :hide-footer="true"
  >
    <p>Enter your new password</p>
    <forgot-password-form-2></forgot-password-form-2>
  </base-layout>
</template>
  
  <script>
import ForgotPasswordForm2 from "../components/forgot-password/ForgotPasswordForm2.vue";

export default {
  components: {
    ForgotPasswordForm2,
  },
};
</script>
  
  <style scoped>
p {
  color: var(--ion-text-color-primary-contrast);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
}
</style>