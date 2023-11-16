import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/GoogleCalendar',
      name: 'GoogleCalendar',
      component: () => import('../views/GoogleCalendar.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/Articles.vue')
    },
    {
      path: '/logadmin',
      name: 'logadmin',
      component: () => import('../views/logAdmin.vue')
    }
  ],
  base: 'https://clarallbt.github.io/DITO/'
})

export default router
