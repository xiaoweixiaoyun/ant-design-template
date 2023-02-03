import Layout from '@/components/layout/index.vue';
export default [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/components/pages/Home/index.vue'),
        meta: { title: 'home', icon: 'fa fa-tachometer' }
      }
    ]
  },
  {
    path: '/my-conponents',
    name: 'MyConponents',
    component: Layout,
    meta: { title: 'myConponents', icon: 'fa fa-cubes' },
    redirect: 'loading',
    children: [
      {
        path: '/loading',
        name: 'Loading',
        component: () => import('@/components/pages/MyConponents/Loading/index.vue'),
        meta: { title: 'loading' }
      },
      {
        path: '/import-excle',
        name: 'ImportExcle',
        component: () => import('@/components/pages/MyConponents/ImportExcle/index.vue'),
        meta: { title: 'importExcle' }
      },
      {
        path: '/toast',
        name: 'Toast',
        component: () => import('@/components/pages/MyConponents/Toast/index.vue'),
        meta: { title: 'toast' }
      }
    ]
  },
  {
    path: '/my-directives',
    name: 'MyDirectives',
    component: Layout,
    redirect: 'show-tips',
    meta: { title: 'myDirectives', icon: 'fa fa-code' },
    children: [
      {
        path: '/show-tips',
        name: 'ShowTips',
        component: () => import('@/components/pages/MyDirectives/ShowTips/index.vue'),
        meta: { title: 'showTips' }
      },
      {
        path: '/permission',
        name: 'Permission',
        component: () => import('@/components/pages/MyDirectives/Permission/index.vue'),
        meta: { title: 'permission' }
      },
      {
        path: '/copy',
        name: 'Copy',
        component: () => import('@/components/pages/MyDirectives/Copy/index.vue'),
        meta: { title: 'copy' }
      },
      {
        path: '/resize',
        name: 'Resize',
        component: () => import('@/components/pages/MyDirectives/Resize/index.vue'),
        meta: { title: 'resize' }
      }
    ]
  },
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/components/pages/error/404.vue')
  }
];
