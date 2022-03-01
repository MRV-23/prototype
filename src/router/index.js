import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/renta',
    name: 'Rentas',
    component: () => import('../views/Rentas.vue')
  },
  {
    path: '/brincolin',
    name: 'About',
    component: () => import('../views/Brincolin.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
