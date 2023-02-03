<template>
  <div class="collapse-box">
    <MenuUnfoldOutlined v-show="collapsed" class="trigger" @click="toggle" />
    <MenuFoldOutlined v-show="!collapsed" class="trigger" @click="toggle" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
const collapsed = ref(false);
const emit = defineEmits({
  toggle: null
});
const toggle = () => {
  collapsed.value = !collapsed.value;
  emit('toggle');
};
</script>

<style lang="less" scoped>
.trigger {
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1.6rem;
  &:hover {
    color: #1890ff;
  }
}
</style>
