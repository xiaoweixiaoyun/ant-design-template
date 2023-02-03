<template>
  <div class="wei-content-card">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        全局等待组件
      </p>
      <p class="text">
        vue3.0 组件全局注册，利用getCurrentInstance提供api操作，const instance = getCurrentInstance();
        <br />
        打开方法：instance.proxy.$loading.show();
        <br />
        关闭方法：instance.proxy.$loading.hide();
      </p>
    </div>
    <br />
    <a-button type="primary" size="large" @click="loading">
      加载等待……
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance() as any;
const loading = () => {
  instance.proxy.$loading.show('数据请求中，请稍候……');
  setTimeout(() => {
    instance.proxy.$loading.hide();
  }, 3000);
};
</script>
