import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/pricing', name: 'Pricing', component: () => import('@/views/Pricing.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue')},
  { path: '/home', alias: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/news', name: 'News', component: () => import('@/views/News.vue') },
  { path: '/team', name: 'Team', component: () => import('@/views/Team.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') },
  { path: '/impressum', name: 'Impressum', component: () => import('@/views/Impressum.vue') },
  {
    path: '/activities',
    children: [
      {
        path: '',
        name: 'Activities',
        component: () => import('@/views/Activities.vue'),
      },
      {
        path: 'quiz',
        name: 'QuizHub',
        component: () => import('@/views/Activities/QuizHub.vue'),
      }

    ]
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'activeLink',
})
// console.table(router.getRoutes().map(r => ({ name: r.name, path: r.path })))
export default router
