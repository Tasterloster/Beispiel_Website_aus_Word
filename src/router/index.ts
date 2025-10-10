import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '@/views/Pricing.vue'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Team from '@/views/Team.vue'
import Contact from '@/views/Contact.vue'
import Impressum from '@/views/Impressum.vue'

const routes = [
  {path: '/pricing', name: 'Pricing', component: Pricing},
  {
    path: '/:pathMatch(.*)*',
    name : 'NotFound',
    component: ()=> import('@/views/NotFound.vue'),
  },
  {path: '/home', alias: '/', name: 'Home', component: Home},
  {path: '/news', name: 'News', component: News},
  {path: '/team', name: 'Team', component: Team},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/impressum', name: 'Impressum', component: Impressum},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'activeLink',
})

export default router
