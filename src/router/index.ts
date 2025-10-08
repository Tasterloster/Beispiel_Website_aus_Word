import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '@/views/Pricing.vue'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'

const routes = [
  {path: '/pricing', name: 'Pricing', component: Pricing},
  {
    path: '/:pathMatch(.*)*',
    name : 'NotFound',
    component: ()=> import('@/views/NotFound.vue'),
  },
  {path: '/home', name: 'Home', component: Home},
  {path: '/news', name: 'News', component: News},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'activeLink',
})

export default router
