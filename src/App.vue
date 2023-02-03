<template>
  <div style="height: 100%;">
    <a-config-provider :locale="locale">
      <div id="app">
        <router-view />
      </div>
    </a-config-provider>
  </div>
</template>
<script lang="ts">
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const locale: any = ref({});
    const setLanguage = (lang: any) => {
      if (lang === 'CN') {
        locale.value = require('ant-design-vue/es/locale-provider/zh_CN').default;
      } else {
        locale.value = require('ant-design-vue/es/locale-provider/en_US').default;
      }
    };
    watch(
      () => store.state.language.lang,
      (newVal: any) => {
        setLanguage(newVal);
      }
    );
    store.dispatch('language/initLanguage');
    return { locale };
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
