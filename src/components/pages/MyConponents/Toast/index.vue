<template>
  <div class="wei-content-card">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        自定义Toast组件
      </p>
      <div class="text">
        <h3>1、引入组件</h3>
        <div>import Toast from '@/plugins/Toast/index';</div>
        <br />
        <h3>2、使用</h3>
        <div>Toast({ title: '加入成功', duration: 2000 });</div>
        <div>Toast( '加入成功' );</div>
      </div>
    </div>
    <br />
    <a-button type="primary" size="large" @click="toast">
      Toast
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import Toast from '@/plugins/Toast/index';
const toast = () => {
  Toast();
  // Toast('请稍等……');
  // Toast({
  //   title: '请稍等，马上回来……',
  //   duration: 3000
  // });
};
</script>
