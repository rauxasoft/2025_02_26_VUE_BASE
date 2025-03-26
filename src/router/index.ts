import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import EjemplosVarios from '@/views/EjemplosVarios.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about',component: About },
  { path: '/ejemplos-varios', name: 'ejemplosVarios',component: EjemplosVarios }
  
]

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: routes
})

export default router
