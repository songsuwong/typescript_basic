import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/testI18n',
      name: 'testI18n',
      component: () => import('../views/testI18n.vue'),
    },
    {
      path: '/testpinia',
      name: 'testpinia',
      component: () => import('../views/testPinia.vue'),
    },
    {
      path: '/testAxios',
      name: 'testAxios',
      component: () => import('../views/testAxios.vue'),
    }
  ],
})

export default router
