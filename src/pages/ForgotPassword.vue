<template>
  <base-layout
    :add-padding="true"
    page-title="Forgot Password"
    page-back-link="/login"
    :hide-footer="true"
  >
    <p>Please enter your email address We will send you the OTP via email</p>
    <forgot-password-form></forgot-password-form>
  </base-layout>
</template>

<script>
import ForgotPasswordForm from "../components/forgot-password/ForgotPasswordForm.vue";

export default {
  components: {
    ForgotPasswordForm,
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