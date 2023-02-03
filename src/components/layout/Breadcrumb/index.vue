<template>
  <a-breadcrumb style="height: 25px;">
    <a-breadcrumb-item v-for="item in route.matched.filter(item => Object.keys(item.meta).length > 0)" :key="item.path">
      {{ $t('menu.' + item.meta.title) }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
