<template>
  <a-sub-menu :key="route.name">
    <template v-slot:title>
      <span className="anticon">
        <i :class="[route.meta.icon, 'fa-lg', 'fa-fw']"></i>
      </span>
      <span>{{ $t('menu.' + route.meta.title) }}</span>
    </template>
    <template v-for="item in route.children">
      <a-menu-item v-if="!item.children || item.children.length === 0" :key="item.name">
        <template #icon>
          <span className="anticon">
            <i :class="[item.meta.icon, 'fa-lg', 'fa-fw']"></i>
          </span>
        </template>
        <span>{{ $t('menu.' + item.meta.title) }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :route="item" />
    </template>
  </a-sub-menu>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  route: {
    type: Object,
    default: () => ({})
  }
});
</script>
