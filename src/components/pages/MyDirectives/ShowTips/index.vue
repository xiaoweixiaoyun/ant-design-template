<template>
  <div class="wei-content-card">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        文本显示省略号指令
      </p>
      <p class="text">
        自定义组件就是实现Vue提供的钩子函数，在Vue 3中钩子函数的生命周期和组件的生命周期类似：
        <br />
        created: 元素创建后，但是属性和事件还没有生效时调用。
        <br />
        beforeMount: 仅调用一次，当指令第一次绑定元素的时候。
        <br />
        mounted- 元素被插入父元素时调用。
        <br />
        beforeUpdate: 在元素自己更新之前调用。
        <br />
        updated: 元素或者子元素更新之后调用。
        <br />
        beforeUnmount: 元素卸载前调用。
        <br />
        unmounted: 当指令卸载后调用，仅调用一次。
        <br />
        <br />
        使用方法：v-show-tips
      </p>
    </div>
    <br />
    <div v-show-tips style="width: 200px; background: #dff;">
      自定义组件就是实现Vue提供的钩子函数，在Vue 3中钩子函数的生命周期和组件的生命周期类似。
    </div>
  </div>
</template>
