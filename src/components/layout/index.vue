<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Logo :collapsed="collapsed" />
      <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" mode="inline" theme="dark">
        <template v-for="item in routes">
          <!-- 单个菜单 -->
          <a-menu-item v-if="!item.children || item.children.length === 0" :key="item.name">
            <template #icon>
              <span className="anticon">
                <i :class="[item.meta.icon, 'fa-lg', 'fa-fw']"></i>
              </span>
            </template>
            <span>{{ $t('menu.' + item.meta.title) }}</span>
          </a-menu-item>
          <!-- 不显示父级菜单的一组子菜单 -->
          <template v-else-if="!item.name && item.children.length > 0">
            <a-menu-item v-for="e in item.children" :key="e.name">
              <template #icon>
                <span className="anticon">
                  <i :class="[e.meta.icon, 'fa-lg', 'fa-fw']"></i>
                </span>
              </template>
              <span>{{ $t('menu.' + e.meta.title) }}</span>
            </a-menu-item>
          </template>
          <SubMenu v-else :key="item.name" :route="item" />
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-box">
        <div class="header-left">
          <Collapse @toggle="collapsed = !collapsed" />
          <Breadcrumb />
        </div>
        <div class="header-right">
          <Enlarge />
          <LanguageSelect />
          <UserInfo v-if="login" />
        </div>
      </a-layout-header>
      <BreadTab />
      <a-layout-content
        :style="{
          margin: '5px',
          marginTop: '5px',
          background: '#fff',
          flexDirection: 'column',
          display: 'flex'
        }"
      >
        <transition name="container">
          <router-view />
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Logo from '@/components/layout/Logo/index.vue';
import SubMenu from '@/components/layout/SubMenu/index.vue';
import Collapse from '@/components/layout/Collapse/index.vue';
import Breadcrumb from '@/components/layout/Breadcrumb/index.vue';
import Enlarge from '@/components/layout/Enlarge/index.vue';
import LanguageSelect from '@/components/layout/LanguageSelect/index.vue';
import UserInfo from '@/components/layout/UserInfo/index.vue';
import BreadTab from '@/components/layout/BreadTab/index.vue';
import { computed, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    Logo,
    SubMenu,
    Collapse,
    Breadcrumb,
    Enlarge,
    LanguageSelect,
    UserInfo,
    BreadTab
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const openKeys = ref([route.matched[0].name || '']);
    const selectedKeys = ref([route.name]);
    const collapsed = ref(false);
    // 选中跳转
    watch(selectedKeys, val => {
      router.push({ name: val[0] });
    });
    // 获取权限路由
    const routes = computed(() => store.getters.rolesRoutes.filter(item => !item.hidden) || []);
    const login = store.state.app.login;
    return {
      openKeys,
      selectedKeys,
      collapsed,
      routes,
      login
    };
  }
};
</script>
<style lang="less" scoped>
.layout-container {
  height: 100%;
  .header-box {
    background: #fff;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
