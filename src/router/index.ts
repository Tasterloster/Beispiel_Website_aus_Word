import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '@/views/Pricing.vue'

const routes = [
  {path: '/pricing', name: 'Pricing', component: Pricing},
  {
    path: '/:pathMatch(.*)*',
    name : 'NotFound',
    component: ()=> import('@/views/NotFound.vue'),
  },
  {path: '/home', alias: '/', name: 'Home', component: ()=> import('@/views/Home.vue')},
  {path: '/news', name: 'News', component: ()=> import('@/views/News.vue')},
  {path: '/team', name: 'Team', component: ()=> import('@/views/Team.vue')},
  {path: '/contact', name: 'Contact', component: ()=> import('@/views/Contact.vue')},
  {path: '/impressum', name: 'Impressum', component: ()=> import('@/views/Impressum.vue')},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'activeLink',
})

export default router
