<template>
  <div class="language">
    <div
      class="left"
      :class="{ 'is-selected': $i18n.locale === 'en-US' }"
      @click="setOption('en-US')"
    >
      Eng
    </div>
    <div
      class="right"
      :class="{ 'is-selected': $i18n.locale === 'zh-Hant-HK' }"
      @click="setOption('zh-Hant-HK')"
    >
      中文
    </div>
  </div>
</template>

<script>
import setAuthHeader from "../../axios";

export default {
  methods: {
    setOption(option) {
      this.$i18n.locale = option;
      const token = localStorage.getItem("accessToken");
      setAuthHeader(token);
      // this.$router.go(0);
    },
  },
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
</style>