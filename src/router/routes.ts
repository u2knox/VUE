import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    name: 'item',
    path: '/item/:id',
    props: true,
    component: () => import('@/views/ItemView.vue')
  },
  
]