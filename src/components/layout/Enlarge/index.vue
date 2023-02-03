<template>
  <div class="enlarge" @click="clickFullscreen">
    <FullscreenExitOutlined v-if="isFullscreen" style="font-size: 1.6rem;" />
    <FullscreenOutlined v-if="!isFullscreen" style="font-size: 1.6rem;" />
  </div>
</template>
<script lang="ts" setup>
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';
import screenfull from 'screenfull';
import { ref } from 'vue';
const isFullscreen = ref(false);
const clickFullscreen = () => {
  if (!screenfull.isEnabled) {
    return false;
  }
  isFullscreen.value = !isFullscreen.value;
  screenfull.toggle();
};
</script>
<style lang="less" scoped>
.enlarge {
  padding: 0 15px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
</style>
