<template>
  <div class="wei-content-card">
    <div class="jieshao">
      <p class="title">
        <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
        权限控制指令
      </p>
      <p class="text">
        自定义组件就是实现Vue提供的钩子函数，在Vue 3中钩子函数的生命周期和组件的生命周期类似：
        <br />
        created: 元素创建后，但是属性和事件还没有生效时调用。
        <br />
        beforeMount(bind): 仅调用一次，当指令第一次绑定元素的时候。
        <br />
        mounted(inserted): 元素被插入父元素时调用。
        <br />
        beforeUpdate(updated): 在元素自己更新之前调用。
        <br />
        updated(componentUpdated): 元素或者子元素更新之后调用。
        <br />
        beforeUnmount: 元素卸载前调用。
        <br />
        unmounted(unbind): 当指令卸载后调用，仅调用一次。
        <br />
        <br />
        登录之后获取权限并存入：localStorage.setItem('PERMISSIONS', ['user:view', 'role:update', 'dept:add',
        'role:add']);
        <br />
        使用方法：v-permission="['user:editor','user:insert']"
      </p>
    </div>
    <br />
    <a-button v-permission="['user:editor']" type="primary" style="margin-left: 10px;">
      editor
    </a-button>
    <a-button v-permission="['user:update']" type="primary" style="margin-left: 10px;">
      update
    </a-button>
    <a-button v-permission="['user:insert']" type="primary" style="margin-left: 10px;">
      insert
    </a-button>
    <a-button v-permission="['user:delete']" type="primary" style="margin-left: 10px;">
      delete
    </a-button>
  </div>
</template>
