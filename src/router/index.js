import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountViewComp from '../views/CountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/link',
      name: 'link',
      component: () => import('../views/Link.vue')
    },
    {
      path: '/count',
      name: 'count',
      component: CountViewComp
    }
  ]
})

export default router
