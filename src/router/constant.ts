export default [
  {
    path: '/login',
    name: 'Login',
    title: 'Login',
    hidden: true,
    component: () => import('@/components/pages/login.vue')
  },
  {
    path: '/404',
    name: 'Error',
    title: 'Error',
    hidden: true,
    component: () => import('@/components/pages/error/404.vue')
  }
];
