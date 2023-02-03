<template>
  <div class="github">
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="CN">
            {{ $t('login.stringCn') }}
          </a-menu-item>
          <a-menu-item key="US">
            {{ $t('login.stringUs') }}
          </a-menu-item>
        </a-menu>
      </template>
      <span>
        <GlobalOutlined style="font-size: 1.6rem;" />
      </span>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { GlobalOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
const { locale } = useI18n();
const store = useStore();
const handleMenuClick = (e: any) => {
  locale.value = e.key;
  store.dispatch('language/changeLanguage', e.key);
};
</script>
<style lang="less" scoped>
.github {
  height: 100%;
  padding: 0 15px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.ant-dropdown-trigger {
  display: flex;
  align-items: center;
}
.ant-dropdown-menu {
  margin-top: 17px;
}
</style>
