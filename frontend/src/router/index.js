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
      path: '/actualités',
      name: 'actualités',
      component: () => import('../views/Actualities.vue')
    },
    {
      path: '/logadmin',
      name: 'logadmin',
      component: () => import('../views/logAdmin.vue')
    },
    {
      path: '/MentionsLégales',
      name: 'MentionsLégales',
      component: () => import('../views/ML.vue')
    },
    {
      path: '/politique-confidentialite',
      name: 'Politique de confidentialité',
      component: () => import('../views/PC.vue')
    }
  ],
  base: 'https://clarallbt.github.io/DITO/'
})

export default router
