<template>
  <div class="wei-content-card">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        自定义Excel上传组件
      </p>
      <div class="text">
        <h3>1、引入组件</h3>
        <div>import ImportExcle from '@/components/molecules/ImportExcle/index.vue';</div>
        <div>import importEmit from '@/components/molecules/ImportExcle/importEmit';</div>
        <br />
        <h3>2、使用</h3>
        <div>&lt;ImportExcle :visible="visibleImport" @import="importFun" @close="importCloseFun"/&gt;</div>
        <div>const { visibleImport, importShowFun, importCloseFun } = importEmit();</div>
        <div>const importFun = (params: any) => { console.log(params); };</div>
        <div>templateAddress: 是否需要下载模板文件，参数（数组对象）</div>
      </div>
    </div>
    <br />
    <a-button type="primary" size="large" @click="importShowFun">
      Excel上传
    </a-button>
    <ImportExcle
      :visible="visibleImport"
      :template-address="templateAddress"
      @import="importFun"
      @close="importCloseFun"
    />
  </div>
</template>
<script lang="ts" setup>
import ImportExcle from '@/plugins/ImportExcle/index.vue';
import importEmit from '@/plugins/ImportExcle/index';
const importFun = (params: any) => {
  console.log(params);
};
const { visibleImport, importShowFun, importCloseFun } = importEmit();
const templateAddress = [
  {
    name: '模板1',
    path: 'http://frontend-utils.trechina.cn/dist/frontend-utils.min.js'
  }
];
</script>
