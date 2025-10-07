import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '@/views/Pricing.vue'

const routes = [
  {path: '/pricing', name: 'Pricing', component: Pricing},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'activeLink',
})

export default router
