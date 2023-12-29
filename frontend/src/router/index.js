import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Actualities from '../views/Actualities.vue'
import ArticleDetails from '../views/ArticleDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/actualites',
      name: 'actualites',
      component: Actualities
    },
    {
      path: '/logadmin',
      name: 'logadmin',
      component: () => import('../components/LogAdmin.vue')
    },
    {
      path: '/CRUD',
      name: 'CRUD',
      component: () => import('../views/CRUD.vue')
    },
    {
      path: '/actualites',
      name: 'actualites',
      component: () => import('../views/Actualities.vue')
    },
    {
      path: '/article/:id',
      name: 'ArticleDetails',
      component: ArticleDetails,
    },
    {
      path: '/mentions-legales',
      name: 'MentionsLegales',
      component: () => import('../views/ML.vue')
    },
    {
      path: '/politique-confidentialite',
      name: 'Politique de confidentialité',
      component: () => import('../views/PC.vue')
    }
  ],
  base: 'https://clarallbt.github.io/DITO/',
  scrollBehavior (to, from, savedPosition) {
    // Si l'utilisateur revient en arrière, utilisez la position sauvegardée
    if (savedPosition) {
      return savedPosition
    } else {
      // Sinon, faites défiler jusqu'en haut de la page
      return { left: 0, top: 0 }
    }
  }
})

export default router
