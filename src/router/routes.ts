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
    props: route => ({
      id: parseInt(route.params.id as string),
      type: 'mobile'
    }),
    component: () => import('@/views/ItemView.vue')
  },
  {
    name: 'itemComp',
    path: '/item-comp/:id',
    props: route => ({
      id: parseInt(route.params.id as string),
      type: 'comp'
    }),
    component: () => import('@/views/ItemView.vue')
  },
  {
    name: 'catalog',
    path: '/catalog',
    component: () => import('@/views/CatalogView.vue'),
    children: [
      {
        name: 'headphone',
        path: 'headphone',
        component: () => import('@/views/catalog/HeadphoneView.vue')
      },
      {
        name: 'microphone',
        path: 'microphone',
        component: () => import('@/views/catalog/MicrophoneView.vue')
      }
    ]
  }
]