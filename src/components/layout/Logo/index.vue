<template>
  <div class="logo">
    <img :src="logo" />
    <span v-show="!collapsed">
      {{ name }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { defineProps } from 'vue';
defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
});
const store = useStore();
const logo = require('@/assets/img/' + store.state.app.logo);
const name = store.state.app.name;
</script>
<style lang="less" scoped>
.logo {
  height: 60px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid rgba(102, 102, 102, 0.6);
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
